import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about adopting an Australian Labradoodle from Lily's Labradoodles — pricing, sizes, health testing, grooming, training, and more.",
};

export default function FAQPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Frequently Asked Questions
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xl font-bold text-white/90">
          Everything you need to know about welcoming home a Lily&apos;s Labradoodle.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        <p className="mb-8 text-center text-foreground/70">
          Tap any question below to see the answer.
        </p>
        <FaqAccordion />
      </div>
    </main>
  );
}
