import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { db, applicationsTable } from "@workspace/db";
import { SubmitApplicationBody } from "@workspace/api-zod";

const router: IRouter = Router();

function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character] ?? character;
  });
}

function applicationDetails(data: Record<string, unknown>): string {
  return Object.entries(data)
    .map(([key, value]) => `${key}: ${String(value ?? "")}`)
    .join("\n");
}

function hasContactConsent(data: Record<string, unknown>): boolean {
  return String(data["Contact Consent"] ?? "").toLowerCase().startsWith("yes");
}

function requestedLoanAmount(data: Record<string, unknown>): number | undefined {
  const entry = Object.entries(data).find(([key]) => {
    const normalized = key.toLowerCase().replace(/[^a-z]/g, "");
    return normalized.includes("loanamount") || normalized.includes("requestedamount");
  });
  if (!entry) return undefined;

  const amount = Number(String(entry[1] ?? "").replace(/[^0-9.-]/g, ""));
  return Number.isFinite(amount) && amount > 0 ? amount : undefined;
}

async function sendToCrm(
  type: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  data: Record<string, unknown>,
): Promise<{ leadId?: number; status?: string } | null> {
  const baseUrl = process.env.CRM_BASE_URL?.trim().replace(/\/$/, "");
  const secret = process.env.CRM_WEBHOOK_SECRET?.trim();

  if (!baseUrl || !secret) {
    return null;
  }

  const response = await fetch(`${baseUrl}/api/webhook/mortgage-inquiry`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": secret,
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      phone,
      loanType: type === "long-term" ? "Long-Term Mortgage" : "Short-Term / Bridge Loan",
      loanAmount: requestedLoanAmount(data),
      message: applicationDetails(data),
      source: "1stnmb-website",
      consent: hasContactConsent(data),
      consentVersion: "2026-07-20",
    }),
    signal: AbortSignal.timeout(8_000),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`CRM returned ${response.status}: ${body.slice(0, 300)}`);
  }

  return response.json() as Promise<{ leadId?: number; status?: string }>;
}

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.GMAIL_FROM ?? process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user, pass },
  });
}

function buildEmailHtml(type: string, firstName: string, lastName: string, email: string, phone: string, data: Record<string, unknown>) {
  const typeLabel = type === "long-term" ? "Long-Term Mortgage" : "Short-Term / Bridge Loan";
  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;">${escapeHtml(k)}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;font-size:13px;font-weight:600;">${escapeHtml(v)}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px;">
      <div style="background:#0B2F5B;padding:20px 24px;border-radius:6px 6px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;">New ${typeLabel} Loan Request</h1>
        <p style="color:#8ab4e8;margin:4px 0 0;font-size:13px;">First Nationwide Mortgage Bank — specialist review requested</p>
      </div>
      <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px;border:1px solid #e0e0e0;">
        <h2 style="color:#0B2F5B;font-size:16px;margin-top:0;">Applicant</h2>
        <p style="margin:0 0 4px;"><strong>${safeFirstName} ${safeLastName}</strong></p>
        <p style="margin:0 0 4px;color:#555;">📧 ${safeEmail}</p>
        <p style="margin:0 0 20px;color:#555;">📞 ${safePhone}</p>
        <h2 style="color:#0B2F5B;font-size:16px;">Application Details</h2>
        <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:4px;">
          ${rows}
        </table>
        <div style="margin-top:20px;padding:12px 16px;background:#fff3cd;border:1px solid #ffc107;border-radius:6px;">
          <strong style="color:#856404;">Follow-up:</strong>
          <span style="color:#856404;"> Review this request and respond within the stated 24–48 hour timeframe.</span>
        </div>
        <p style="margin-top:16px;font-size:12px;color:#999;">Submitted via 1stnmb.com</p>
      </div>
    </div>
  `;
}

async function sendSmsAlert(firstName: string, lastName: string, phone: string, type: string, applicationId: number): Promise<void> {
  const toPhone = process.env.NOTIFICATION_PHONE;
  if (!toPhone) return;

  const typeLabel = type === "long-term" ? "Long-Term Mortgage" : "Bridge Loan";
  const message = `New FNMB lead\n${firstName} ${lastName} submitted a ${typeLabel} request.\nPhone: ${phone}\nReview: https://1stnmb.com/admin (ID #${applicationId})`;

  try {
    const connectors = new ReplitConnectors();
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioPhoneNumber = process.env.TWILIO_FROM_PHONE;

    if (!twilioAccountSid || !twilioPhoneNumber) {
      return;
    }

    await connectors.proxy("twilio", `/2010-04-01/Accounts/${twilioAccountSid}/Messages.json`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        To: toPhone,
        From: twilioPhoneNumber,
        Body: message,
      }).toString(),
    });
  } catch (smsErr) {
    // SMS failure is non-blocking — logged by caller
    throw smsErr;
  }
}

router.post("/applications", async (req, res) => {
  const parsed = SubmitApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { type, firstName, lastName, email, phone, data } = parsed.data;

  if (!hasContactConsent(data as Record<string, unknown>)) {
    res.status(400).json({ error: "Contact consent is required" });
    return;
  }

  let savedId: number;
  try {
    const [saved] = await db
      .insert(applicationsTable)
      .values({ type, firstName, lastName, email, phone, data })
      .returning({ id: applicationsTable.id });
    savedId = saved.id;
  } catch (err) {
    req.log.error(err, "Failed to save application to database");
    res.status(500).json({ error: "Failed to submit application" });
    return;
  }

  try {
    const crmLead = await sendToCrm(
      type,
      firstName,
      lastName,
      email,
      phone,
      data as Record<string, unknown>,
    );
    if (crmLead) {
      req.log.info(
        { applicationId: savedId, crmLeadId: crmLead.leadId, crmStatus: crmLead.status },
        "Application copied to CRM",
      );
    } else {
      req.log.warn(
        { applicationId: savedId },
        "Application saved — CRM integration is not configured",
      );
    }
  } catch (crmErr) {
    req.log.warn(
      { applicationId: savedId, err: crmErr },
      "Application saved but CRM delivery failed",
    );
  }

  const transporter = createTransporter();
  const notificationEmail = process.env.NOTIFICATION_EMAIL ?? "efrish@c21edva.com";
  const fromAddress = process.env.GMAIL_FROM ?? process.env.SMTP_USER ?? "";

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"FNMB Website" <${fromAddress}>`,
        to: notificationEmail,
        subject: `New FNMB ${type === "long-term" ? "Long-Term" : "Bridge Loan"} Request — ${firstName} ${lastName}`,
        html: buildEmailHtml(type, firstName, lastName, email, phone, data as Record<string, unknown>),
      });
      req.log.info({ applicationId: savedId }, "Application saved and email sent");
    } catch (emailErr) {
      req.log.warn({ applicationId: savedId, err: emailErr }, "Application saved but email failed — check SMTP credentials");
    }
  } else {
    req.log.warn({ applicationId: savedId }, "Application saved — SMTP not configured, email skipped");
  }

  // Send owner SMS notification via Twilio
  try {
    await sendSmsAlert(firstName, lastName, phone, type, savedId);
    req.log.info({ applicationId: savedId }, "SMS lead alert sent");
  } catch (smsErr) {
    req.log.warn({ applicationId: savedId, err: smsErr }, "Application saved but SMS alert failed — check Twilio config");
  }

  res.status(201).json({ id: savedId, message: "Application received" });
});

export default router;
