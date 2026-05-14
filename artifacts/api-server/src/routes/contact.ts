import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    req.log.error("GMAIL_USER or GMAIL_APP_PASSWORD env vars not set");
    res.status(500).json({ error: "Email service not configured." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: gmailUser, pass: gmailPass },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:24px;background:#1a1827;color:#c8c5d8;border-radius:12px;">
          <h2 style="color:#918ca9;margin-bottom:4px;">New Portfolio Message</h2>
          <hr style="border-color:#918ca9;opacity:0.2;margin-bottom:20px;" />
          <p><strong style="color:#918ca9;">From:</strong> ${name}</p>
          <p><strong style="color:#918ca9;">Email:</strong> <a href="mailto:${email}" style="color:#918ca9;">${email}</a></p>
          <p><strong style="color:#918ca9;">Message:</strong></p>
          <div style="background:#211f2f;padding:16px;border-radius:8px;border-left:3px solid #918ca9;margin-top:8px;white-space:pre-wrap;">${message}</div>
        </div>
      `,
    });

    req.log.info({ from: email }, "Contact form email sent");
    res.json({ success: true });
  } catch (err) {
    req.log.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
