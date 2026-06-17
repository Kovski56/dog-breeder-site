import type { Metadata } from "next";
import InquiryForm from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Puppy Inquiries",
  description: `Inquire about upcoming ${site.breed} puppies at ${site.name}.`,
};

export default function InquiriesPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-2xl px-6 py-16 md:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
          Puppy inquiries
        </h1>
        <p className="mt-4 leading-relaxed text-foreground/70">
          Interested in a puppy from our upcoming litter? Fill out the form below and
          we&apos;ll get back to you. The more you can share about what you&apos;re
          looking for, the better we can help.
        </p>

        <div className="mt-10">
          <InquiryForm />
        </div>
      </div>
    </main>
  );
}
