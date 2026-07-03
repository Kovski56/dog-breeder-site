import "server-only";
import nodemailer from "nodemailer";

export type InquiryInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

/**
 * Reads the SMTP settings from the environment. Returns null if any required
 * value is missing, so callers can surface a clear "not configured" message
 * instead of crashing. See .env.example for what to set.
 */
function getConfig() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.INQUIRY_TO;
  if (!user || !pass || !to) return null;
  return {
    user,
    pass,
    to,
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
  };
}

export type ApplicationFields = Record<string, string>;

export async function sendApplicationEmail(
  fields: ApplicationFields,
  subject: string,
  fromLabel: string,
): Promise<void> {
  const config = getConfig();
  if (!config) {
    throw new Error(
      "Email is not configured. Set SMTP_USER, SMTP_PASS, and INQUIRY_TO in .env.local.",
    );
  }

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465,
    auth: { user: config.user, pass: config.pass },
  });

  const lines = Object.entries(fields)
    .map(([key, val]) => `${key}: ${val}`)
    .join("\n");

  await transport.sendMail({
    from: `"${fromLabel}" <${config.user}>`,
    to: config.to,
    replyTo: fields["Email"] ? `<${fields["Email"]}>` : config.user,
    subject,
    text: `${fromLabel.toUpperCase()}\n${"=".repeat(40)}\n\n${lines}`,
  });
}

/** @deprecated use sendApplicationEmail */
export async function sendGuardianApplicationEmail(
  fields: ApplicationFields,
): Promise<void> {
  return sendApplicationEmail(
    fields,
    `New Guardian Application — ${fields["Name"] ?? "Unknown"}`,
    "Guardian Application",
  );
}

export async function sendInquiryEmail(input: InquiryInput): Promise<void> {
  const config = getConfig();
  if (!config) {
    throw new Error(
      "Email is not configured. Set SMTP_USER, SMTP_PASS, and INQUIRY_TO in .env.local (see .env.example).",
    );
  }

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.port === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: { user: config.user, pass: config.pass },
  });

  const lines = [
    `Name:  ${input.name}`,
    `Email: ${input.email}`,
    input.phone ? `Phone: ${input.phone}` : null,
    "",
    input.message,
  ].filter((line): line is string => line !== null);

  await transport.sendMail({
    from: `"Puppy Inquiry" <${config.user}>`,
    to: config.to,
    replyTo: `"${input.name}" <${input.email}>`,
    subject: `New puppy inquiry from ${input.name}`,
    text: lines.join("\n"),
  });
}
