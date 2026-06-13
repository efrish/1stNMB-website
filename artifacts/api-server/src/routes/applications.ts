import { Router, type IRouter } from "express";
import nodemailer from "nodemailer";
import { db, applicationsTable } from "@workspace/db";
import { SubmitApplicationBody } from "@workspace/api-zod";

const router: IRouter = Router();

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
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
        <h1 style="color:#fff;margin:0;font-size:20px;">New ${typeLabel} Application</h1>
        <p style="color:#8ab4e8;margin:4px 0 0;font-size:13px;">First Nationwide Mortgage Bank</p>
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
        <p style="margin-top:20px;font-size:12px;color:#999;">Submitted via 1stnmb.com</p>
      </div>
    </div>
  `;
}

router.post("/applications", async (req, res) => {
  const parsed = SubmitApplicationBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "Invalid request body" });
    return;
  }

  const { type, firstName, lastName, email, phone, data } = parsed.data;

  try {
    const [saved] = await db
      .insert(applicationsTable)
      .values({ type, firstName, lastName, email, phone, data })
      .returning({ id: applicationsTable.id });

    const transporter = createTransporter();
    const notificationEmail = process.env.NOTIFICATION_EMAIL ?? "efrish@c21edva.com";

    if (transporter) {
      await transporter.sendMail({
        from: `"FNMB Website" <${process.env.SMTP_USER}>`,
        to: notificationEmail,
        subject: `New ${type === "long-term" ? "Long-Term" : "Bridge Loan"} Application — ${firstName} ${lastName}`,
        html: buildEmailHtml(type, firstName, lastName, email, phone, data as Record<string, unknown>),
      });
      req.log.info({ applicationId: saved.id }, "Application saved and email sent");
    } else {
      req.log.warn({ applicationId: saved.id }, "Application saved — SMTP not configured, email skipped");
    }

    res.status(201).json({ id: saved.id, message: "Application received" });
  } catch (err) {
    req.log.error(err, "Failed to save application");
    res.status(500).json({ error: "Failed to submit application" });
  }
});

export default router;
