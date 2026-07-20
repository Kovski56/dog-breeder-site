import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Recommended food and supplements to give your Lily's Labradoodle the healthiest possible start.",
};

export default function ResourcesPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Resources
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-xl font-bold text-white/90">
          The food and supplements we trust and recommend for your puppy.
        </p>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-14">
        <p className="mb-10 text-center leading-relaxed text-foreground/70">
          {
            "Good nutrition is one of the most important gifts you can give your new companion. The food and supplements below are what we feed and recommend to help your Lily's Labradoodle thrive at every stage of life."
          }
        </p>

        <div className="space-y-8">
          {/* Life's Abundance */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-accent">
              Recommended Food
            </p>
            <h2 className="mt-1 text-2xl font-bold text-brand">
              {"Life's Abundance Dog Food"}
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              {
                "A premium, all-life-stages dog food made with wholesome ingredients and no corn, wheat, or soy proteins — and no artificial preservatives, colors, or flavors. Its large-breed puppy and healthy-weight formulas make it an excellent choice for growing Labradoodles, and it has never been recalled."
              }
            </p>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                No corn, wheat, or soy proteins
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                No artificial preservatives, colors, or flavors
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                Formulated for all life stages, including large-breed puppies
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                Never been recalled
              </li>
            </ul>
            <a
              href="https://lifesabundance.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded bg-brand px-6 py-3 font-bold text-white shadow transition-opacity hover:opacity-90"
            >
              {"Shop Life's Abundance"}
            </a>
          </div>

          {/* NuVet Plus */}
          <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-accent">
              Recommended Supplement
            </p>
            <h2 className="mt-1 text-2xl font-bold text-brand">NuVet Plus</h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              {
                "NuVet Plus is more than a daily vitamin — it is a comprehensive immune-system supplement. It blends antioxidants, amino acids, enzymes, vitamins, and minerals, and is cold-processed to preserve those nutrients. It is especially helpful for supporting a growing puppy's developing immune system. Made in the USA in an FDA-registered facility with a decades-long, recall-free history."
              }
            </p>
            <ul className="mt-4 space-y-2 text-foreground/80">
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                An immune-support supplement — not just a vitamin
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                Antioxidants, amino acids, enzymes, vitamins &amp; minerals
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                Cold-processed to preserve nutrients
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-brand-accent">•</span>
                Made in the USA in an FDA-registered facility
              </li>
            </ul>
            <p className="mt-4 text-sm italic text-foreground/60">
              New customers may need a breeder order code — contact us and we&apos;ll be glad to
              provide it.
            </p>
            <a
              href="https://www.nuvet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded bg-brand px-6 py-3 font-bold text-white shadow transition-opacity hover:opacity-90"
            >
              Order NuVet Plus
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
