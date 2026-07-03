"use client";

import { useActionState } from "react";
import { submitAdoptionApplication, type ApplicationState } from "@/app/adoption/actions";
import { ApplicationFields } from "./ApplicationFormFields";

const initial: ApplicationState = { status: "idle", message: "" };

export default function AdoptionApplicationForm() {
  const [state, formAction, pending] = useActionState(submitAdoptionApplication, initial);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-brand/15 bg-brand-muted/40 p-10 text-center">
        <p className="text-2xl font-bold text-brand">Application Received!</p>
        <p className="mt-3 text-foreground/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-7">
      <ApplicationFields />

      {state.status === "error" && (
        <p className="rounded-xl bg-red-50 p-4 text-sm text-red-700" aria-live="polite">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-brand-accent py-4 text-lg font-bold uppercase tracking-wide text-white shadow transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit Adoption Application"}
      </button>
    </form>
  );
}
