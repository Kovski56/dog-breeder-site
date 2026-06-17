"use server";

import { sendInquiryEmail } from "@/lib/mailer";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Record<string, string>;
};

export async function submitInquiry(
  _prevState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Please enter a valid email address.";
  if (message.length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  try {
    await sendInquiryEmail({
      name,
      email,
      phone: phone || undefined,
      message,
    });
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return {
      status: "error",
      message:
        "Sorry, something went wrong sending your inquiry. Please try again, or email us directly.",
    };
  }

  return {
    status: "success",
    message: "Thank you! Your inquiry has been received. We'll be in touch soon.",
  };
}
