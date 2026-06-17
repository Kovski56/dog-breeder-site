"use server";

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

  // TODO: deliver the inquiry — e.g. send an email, save to a database,
  // or post to a form service. For now we just log it on the server.
  console.log("New puppy inquiry:", { name, email, message });

  return {
    status: "success",
    message: "Thank you! Your inquiry has been received. We'll be in touch soon.",
  };
}
