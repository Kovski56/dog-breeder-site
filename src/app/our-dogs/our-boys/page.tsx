import DogCard from "@/components/DogCard";

export default function OurBoysPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="mb-3 text-center text-4xl font-bold text-brand">Our Boys</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/70">
          Monkey is our own boy here at Lily&apos;s Labradoodles. Our stud dogs below have
          each contributed genetically to our breeding program.
        </p>

        {/* Monkey — our own boy (no caveat needed) */}
        <div className="mx-auto mb-16 max-w-sm">
          <DogCard
            name="Sir Monk Esq. of Lilyslabradoodles"
            imageSrc="/images/dogs/monkey.png"
            imageAlt="Monkey — Sir Monk Esq. of Lilyslabradoodles"
            details={[
              { label: "Call Name", value: "Monkey" },
              { label: "ALAA", value: "Pending" },
              { label: "Color", value: "Red Tuxedo" },
              { label: "Size", value: "Medium — 17 inches, 35 lbs" },
              {
                label: "Health Clearances",
                value: "OFA Hips/Elbows, Heart Normal, vWD Clear, EIC Clear, CERF",
              },
            ]}
            note="Other testing results available upon request."
          />
        </div>

        {/* Stud dogs — each requires the Association caveat */}
        <h2 className="mb-2 text-center text-2xl font-bold text-brand">Our Stud Dogs</h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-foreground/60">
          The following males have each contributed genetically to Lily&apos;s Labradoodles&apos;
          breeding program.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <DogCard
            name="Fairytale Lane's Roo @ Sacto"
            imageSrc="/images/dogs/roo.jpg"
            imageAlt="Roo — stud"
            details={[
              { label: "WALA", value: "00092682" },
              { label: "ALAA", value: "130877" },
              { label: "Color", value: "Apricot Tuxedo" },
              { label: "Size", value: "Micro Mini — 14 inches, 18 lbs" },
              {
                label: "Health Clearances",
                value: "OFA Hips/Elbows, Heart Normal, vWD Clear, EIC Clear, CERF",
              },
            ]}
            note="This dog contributed genetically to the breeding program. Other testing results available upon request."
          />
        </div>
      </section>
    </main>
  );
}
