"use client";

import { useActionState } from "react";
import { submitInquiry, type InquiryState } from "@/app/inquiries/actions";

const initialState: InquiryState = { status: "idle", message: "" };

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-brand/15 bg-brand-muted/40 p-8 text-center">
        <p className="text-lg font-semibold text-brand">Inquiry sent 🐾</p>
        <p className="mt-2 text-foreground/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      <Field
        label="Your name"
        name="name"
        type="text"
        autoComplete="name"
        error={state.errors?.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        error={state.errors?.email}
      />
      <Field
        label="Phone (optional)"
        name="phone"
        type="tel"
        autoComplete="tel"
        required={false}
      />

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground/80">
          Tell us what you&apos;re looking for
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Preferred sex, color, timing, questions about the upcoming litter…"
          className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-foreground outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message}</p>
        )}
      </div>

      {state.status === "error" && !state.errors && (
        <p className="text-sm text-red-600" aria-live="polite">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  error,
  required = true,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-foreground/80">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="mt-2 w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-foreground outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
