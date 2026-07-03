import Link from "next/link";

export default function GuardianProgramPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-16 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Guardian Program
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-2xl font-bold text-white/90">
          A beautiful, cost-effective way to welcome a top-quality Australian Labradoodle into your home.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-16 space-y-12">

        {/* Intro */}
        <section>
          <p className="leading-relaxed text-foreground/80">
            If you love Australian Labradoodles and would like to own one without the upfront cost, our
            Guardian Program may be the perfect fit for you. Our breeding dogs that are not housed with
            us are raised in loving homes as cherished family pets. When we identify an exceptional puppy
            we believe will make a wonderful future mom or dad, we make that puppy available to a carefully
            selected Guardian family. All Guardian Homes go through a thorough application and screening
            process to ensure our puppies are placed in the very best environment.
          </p>
        </section>

        {/* Requirements */}
        <section>
          <h2 className="text-2xl font-bold text-brand mb-4">Location Requirements</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-brand-muted/20 p-6">
              <p className="text-xl font-bold text-brand mb-1">Females</p>
              <p className="text-foreground/80">Must live within <strong>75 minutes</strong> of Rancho Cucamonga, CA.</p>
            </div>
            <div className="rounded-2xl bg-brand-muted/20 p-6">
              <p className="text-xl font-bold text-brand mb-1">Males</p>
              <p className="text-foreground/80">Must live within <strong>30 minutes</strong> of Rancho Cucamonga, CA.</p>
            </div>
          </div>
        </section>

        {/* Home requirements */}
        <section>
          <h2 className="text-2xl font-bold text-brand mb-4">Home Requirements</h2>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex gap-3">
              <span className="text-brand font-bold">•</span>
              An adult must be home at least part-time during the day to provide care and companionship.
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">•</span>
              Dogs must live indoors as full family members — kenneling or outdoor-only living is not permitted.
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">•</span>
              A busy, loving household with children is encouraged for healthy socialization.
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">•</span>
              There may be some limitations on other pets in the home.
            </li>
            <li className="flex gap-3">
              <span className="text-brand font-bold">•</span>
              Guardians agree to raise, train, and care for the dog throughout their lifetime as a permanent family member.
            </li>
          </ul>
        </section>

        {/* What you receive */}
        <section>
          <h2 className="text-2xl font-bold text-brand mb-4">What You Receive</h2>
          <p className="leading-relaxed text-foreground/80">
            If selected as a Guardian family, you will receive a pick-of-the-litter puppy at approximately
            8–10 weeks of age. You are responsible for all normal costs of care and routine medical expenses
            associated with raising a healthy family pet. Lily&apos;s Labradoodles covers all reproductive
            testing and costs associated with pregnancy. Health testing for your puppy is completed between
            4 and 11 months of age.
          </p>
        </section>

        {/* Breeding responsibilities — females */}
        <section>
          <h2 className="text-2xl font-bold text-brand mb-4">Breeding Responsibilities — Females</h2>
          <p className="leading-relaxed text-foreground/80">
            Once your dog has passed all health testing, she will become a breeding dog for Lily&apos;s
            Labradoodles. She will come to us during her heat cycle for breeding, then return home to you
            for the duration of her pregnancy. She will come back to us for delivery, and our Guardian
            families are also welcome to assist in raising the pups. After completing four litters, she
            will be spayed and retire permanently with your family.
          </p>
        </section>

        {/* Breeding responsibilities — males */}
        <section>
          <h2 className="text-2xl font-bold text-brand mb-4">Breeding Responsibilities — Males</h2>
          <p className="leading-relaxed text-foreground/80">
            Males will be used for various breedings for up to five years, after which they will be
            neutered and retire permanently with your family.
          </p>
        </section>

        {/* How to apply */}
        <section className="rounded-2xl bg-soft-beige border border-brand/10 p-8 text-center">
          <h2 className="text-2xl font-bold text-brand mb-3">Interested in Becoming a Guardian?</h2>
          <p className="leading-relaxed text-foreground/80 mb-6">
            Please review the sample Guardian Agreement below, then complete the Guardian Application.
            A home visit may be required as part of the process to ensure your new puppy will be safe and comfortable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/inquiries"
              className="inline-flex items-center justify-center rounded bg-brand-accent px-8 py-3 font-bold uppercase tracking-wide text-white shadow transition-opacity hover:opacity-90"
            >
              Guardian Application
            </Link>
          </div>
          <div className="mt-6 text-foreground/70 space-y-1">
            <p>Questions? We&apos;re happy to help.</p>
            <p>
              <a href="tel:9092612913" className="text-brand hover:underline font-bold">(909) 261-2913</a>
              {" "}·{" "}
              <a href="mailto:Lilyslabradoodles@gmail.com" className="text-brand hover:underline font-bold">
                Lilyslabradoodles@gmail.com
              </a>
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
