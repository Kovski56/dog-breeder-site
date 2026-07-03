import GuardianApplicationForm from "@/components/GuardianApplicationForm";

export default function GuardianApplicationPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Guardian Application
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xl font-bold text-white/90">
          Fill out the form below to begin the process of becoming a Guardian family for Lily&apos;s Labradoodles.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        {/* Reservation Policy */}
        <div className="mb-12 rounded-2xl bg-brand-muted/20 p-8 space-y-4">
          <h2 className="text-2xl font-bold text-brand">Application & Reservation Policy</h2>
          <p className="leading-relaxed text-foreground/80">
            A <strong>Non-Refundable Puppy Consultation Fee of $500</strong> is initially required to reserve
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
            those markings will be placed.
          </p>
          <p className="leading-relaxed text-foreground/80">
            You may move only <strong>one time</strong> to accommodate a specific request. Please let us
            know upon birth of the puppies so we do not hold spaces from other prospective owners.
          </p>

          <h3 className="pt-2 text-xl font-bold text-brand">Puppy Selection Process</h3>
          <ul className="space-y-2 text-foreground/80">
            <li>• We typically take 5–6 reservations per litter, with the option of holding any puppy back for future breeding.</li>
            <li>• We <strong>do not</strong> reserve puppies by color, size, or sex within a litter — only by a specific litter.</li>
            <li>• Puppies are picked in the order reservations and consultation fees are received.</li>
            <li>• Final payment is due when the puppy is 6 weeks old.</li>
            <li>• Holding charge is $50 per day if pickup is delayed past 8 weeks (must be arranged in advance).</li>
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

        {/* The form */}
        <GuardianApplicationForm />
      </div>
    </main>
  );
}
