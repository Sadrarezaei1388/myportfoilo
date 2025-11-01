import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json().catch(() => ({}));
    const {
      name = "",
      email = "",
      phone = "",
      type = "",
      date = "",
      time = "",
      guests = "",
      message = "",
      _source = "",
      company = "", // honeypot (optional)
    } = body || {};

    // honeypot: اگر پر باشه، پیام رو موفق نشون می‌دیم اما چیزی ارسال نمی‌کنیم
    if (company && String(company).trim() !== "") {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // اعتبارسنجی مینیمال
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, message: "Missing required fields." },
        { status: 400 }
      );
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email));
    if (!emailOk) {
      return NextResponse.json(
        { ok: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    // ENV ها
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.TO_EMAIL;

    if (!host || !user || !pass || !to) {
      return NextResponse.json(
        { ok: false, message: "Email transport is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 = SSL
      auth: { user, pass },
    });

    const safe = (s) =>
      String(s ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const subjectPrefix =
      type && type !== "Contact" ? `[${type}]` : "[Contact]";
    const subject =
      body.subject
        ? `${subjectPrefix} ${safe(body.subject)}`
        : `${subjectPrefix} New message`;

    const html = `
      <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Inter,Arial,sans-serif;">
        <tr><td style="font-size:16px;font-weight:700;">New website message</td></tr>
        <tr><td style="height:10px"></td></tr>
        <tr><td><b>From:</b> ${safe(name)} &lt;${safe(email)}&gt;</td></tr>
        ${phone ? `<tr><td><b>Phone:</b> ${safe(phone)}</td></tr>` : ""}
        ${type ? `<tr><td><b>Type:</b> ${safe(type)}</td></tr>` : ""}
        ${
          date || time || guests
            ? `<tr><td><b>Reservation:</b> ${safe(
                [date, time, guests ? `${guests} guests` : ""]
                  .filter(Boolean)
                  .join(" • ")
              )}</td></tr>`
            : ""
        }
        ${_source ? `<tr><td><b>Source:</b> ${safe(_source)}</td></tr>` : ""}
        <tr><td style="height:10px"></td></tr>
        <tr><td style="white-space:pre-wrap;line-height:1.6">${safe(
          message
        )}</td></tr>
        <tr><td style="height:16px"></td></tr>
        <tr><td style="font-size:12px;color:#64748b;">Sent from your website contact form</td></tr>
      </table>
    `;

    await transporter.sendMail({
      from: `"Website" <${user}>`,
      to,
      replyTo: email,
      subject,
      html,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("CONTACT_API_ERROR", err);
    return NextResponse.json(
      { ok: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
