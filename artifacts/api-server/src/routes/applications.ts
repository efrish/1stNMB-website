import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { db, applicationsTable } from "@workspace/db";
import { SubmitApplicationBody } from "@workspace/api-zod";

const router: IRouter = Router();

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
  const rows = Object.entries(data)
    .map(([k, v]) => `<tr><td style="padding:6px 12px;border-bottom:1px solid #eee;color:#666;font-size:13px;">${k}</td><td style="padding:6px 12px;border-bottom:1px solid #eee;font-size:13px;font-weight:600;">${v}</td></tr>`)
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:24px;border-radius:8px;">
      <div style="background:#0B2F5B;padding:20px 24px;border-radius:6px 6px 0 0;">
        <h1 style="color:#fff;margin:0;font-size:20px;">🔥 HOT LEAD — New ${typeLabel} Application</h1>
        <p style="color:#8ab4e8;margin:4px 0 0;font-size:13px;">First Nationwide Mortgage Bank — Call this client NOW</p>
      </div>
      <div style="background:#fff;padding:24px;border-radius:0 0 6px 6px;border:1px solid #e0e0e0;">
        <h2 style="color:#0B2F5B;font-size:16px;margin-top:0;">Applicant</h2>
        <p style="margin:0 0 4px;"><strong>${firstName} ${lastName}</strong></p>
        <p style="margin:0 0 4px;color:#555;">📧 ${email}</p>
        <p style="margin:0 0 20px;color:#555;">📞 ${phone}</p>
        <h2 style="color:#0B2F5B;font-size:16px;">Application Details</h2>
        <table style="width:100%;border-collapse:collapse;border:1px solid #eee;border-radius:4px;">
          ${rows}
        </table>
        <div style="margin-top:20px;padding:12px 16px;background:#fff3cd;border:1px solid #ffc107;border-radius:6px;">
          <strong style="color:#856404;">⚡ Action Required:</strong>
          <span style="color:#856404;"> Call ${firstName} at ${phone} right away — they just submitted an application and are ready to talk.</span>
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
  const message = `🔥 HOT LEAD — FNMB\n${firstName} ${lastName} just submitted a ${typeLabel} application.\nCall them NOW: ${phone}\nView in admin: https://web-enhancer-efrish.replit.app/admin (ID #${applicationId})`;

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

  const transporter = createTransporter();
  const notificationEmail = process.env.NOTIFICATION_EMAIL ?? "efrish@c21edva.com";
  const fromAddress = process.env.GMAIL_FROM ?? process.env.SMTP_USER ?? "";

  if (transporter) {
    try {
      await transporter.sendMail({
        from: `"FNMB Website" <${fromAddress}>`,
        to: notificationEmail,
        subject: `🔥 HOT LEAD — ${type === "long-term" ? "Long-Term" : "Bridge Loan"} Application — ${firstName} ${lastName} — CALL NOW`,
        html: buildEmailHtml(type, firstName, lastName, email, phone, data as Record<string, unknown>),
      });
      req.log.info({ applicationId: savedId }, "Application saved and email sent");
    } catch (emailErr) {
      req.log.warn({ applicationId: savedId, err: emailErr }, "Application saved but email failed — check SMTP credentials");
    }
  } else {
    req.log.warn({ applicationId: savedId }, "Application saved — SMTP not configured, email skipped");
  }

  // Send SMS hot-lead alert via Twilio
  try {
    await sendSmsAlert(firstName, lastName, phone, type, savedId);
    req.log.info({ applicationId: savedId }, "SMS hot-lead alert sent");
  } catch (smsErr) {
    req.log.warn({ applicationId: savedId, err: smsErr }, "Application saved but SMS alert failed — check Twilio config");
  }

  res.status(201).json({ id: savedId, message: "Application received" });
});

export default router;
