import AdoptionApplicationForm from "@/components/AdoptionApplicationForm";

export default function InquiriesPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Adoption Application
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xl font-bold text-white/90">
          Fill out the form below to begin the process of adopting your very own furbaby from Lily&apos;s Labradoodles.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        {/* Reservation Policy */}
        <div className="mb-12 rounded-2xl bg-brand-muted/20 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-brand">Application & Reservation Policy</h2>
          <p className="leading-relaxed text-foreground/80">
            A <strong>Refundable Puppy Deposit of $500</strong> is initially required to reserve
            a puppy in an upcoming litter and hold your picking spot. Payment in full is due when the puppy
            is 6 weeks of age.
          </p>
          <p className="leading-relaxed text-foreground/80">
            You will choose your actual puppy around 8 weeks of age. If a puppy cannot be picked up at
            8 weeks of age, special arrangements can be made to hold your puppy for a specified period of
            time. This needs to be arranged prior to the pick-up day.
          </p>
          <p className="leading-relaxed text-foreground/80">
            If a puppy is not made available per your requests from the reserved litter, you may switch
            to another upcoming litter pending availability. If a puppy is available per your requests and
            you opt out for any reason, you have one year to reapply your deposit to another litter. We
            cannot always accommodate specific requests for exact colors, types of markings, and where
            those markings will be placed upon a puppy&apos;s body (e.g., spot over eye, or similar).
          </p>
          <p className="leading-relaxed text-foreground/80">
            You may move only <strong>one time</strong> to accommodate a specific request. Please let us
            know upon birth of the puppies so we do not hold spaces from other prospective owners.
          </p>

          <h3 className="pt-2 text-xl font-bold text-brand">Puppy Selection Process</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>• We typically take 5–6 reservations per litter, with the option of holding any puppy back for future breeding.</li>
            <li>• We <strong>do not</strong> reserve puppies by color, size, or sex within a litter — only by a specific litter.</li>
            <li>• Puppies are picked in the order reservations and deposits are received. When you are assigned to a litter, you will be assigned a picking spot — this is the order you will choose your puppy from the litter.</li>
            <li>• Final payment is due when the puppy is 6 weeks old.</li>
            <li>• You will choose your puppy and take it home around 8 weeks of age. Holding charge is $50 per day if pickup is delayed past 8 weeks (must be arranged in advance).</li>
          </ul>

          <h3 className="pt-2 text-xl font-bold text-brand">Payment Methods</h3>
          <div className="space-y-1 text-foreground/80">
            <p><strong>PayPal</strong> — Lilyslabradoodles@gmail.com · (909) 261-2913 · Lily&apos;s Labradoodles</p>
            <p><strong>Venmo</strong> — @lilyslabradoodles · (909) 261-2913 · Lily&apos;s Labradoodles</p>
            <p><strong>Zelle</strong> — (909) 261-2913 · Lilyslabradoodles@gmail.com</p>
          </div>

          <div className="pt-2 border-t border-brand/10 text-foreground/70 space-y-1">
            <p className="font-bold text-brand">Lily&apos;s Labradoodles</p>
            <p>(909) 261-2913</p>
            <p>Lilyslabradoodles@gmail.com</p>
          </div>
        </div>

        {/* Sales contract & health agreement */}
        <div className="mb-10 flex flex-col items-center gap-3 rounded-2xl border border-brand/15 bg-white p-6 text-center shadow-sm sm:flex-row sm:justify-between sm:text-left">
          <p className="text-foreground/80">
            Please review our{" "}
            <span className="font-bold text-brand">Sales Contract &amp; Health Agreement</span>{" "}
            before submitting your application.
          </p>
          <a
            href="/documents/sales-contract-and-health-agreement.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded bg-brand px-6 py-3 font-bold text-white shadow transition-opacity hover:opacity-90"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V18a2 2 0 01-2 2z" />
            </svg>
            View Contract (PDF)
          </a>
        </div>

        {/* The form */}
        <AdoptionApplicationForm />
      </div>
    </main>
  );
}
