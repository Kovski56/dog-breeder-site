import DogCard from "@/components/DogCard";

export default function OurBoysPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="mb-3 text-center text-4xl font-bold text-brand">Our Boys</h1>
        <p className="mx-auto mb-12 max-w-2xl text-center text-foreground/70">
          Monkey is our own boy here at Lily&apos;s Labradoodles. The outside studs below have
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

        {/* Contributing outside studs — each requires the Association caveat */}
        <h2 className="mb-2 text-center text-2xl font-bold text-brand">Contributing Outside Studs</h2>
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
          <DogCard
            name="Berrybrook's Sir Calvin @ Sacto Labradoodles"
            imageSrc="/images/dogs/calvin.png"
            imageAlt="Sir Calvin — stud"
            details={[
              { label: "WALA", value: "00065305" },
              { label: "ALAA", value: "100733" },
              { label: "Color", value: "Red Tuxedo" },
              { label: "Size", value: "Medium — 20 inches, 39 lbs" },
              {
                label: "Health Clearances",
                value: "OFA Hips/Elbows, Heart Normal, vWD Clear, EIC Clear, CERF",
              },
            ]}
            note="This dog contributed genetically to the breeding program. Other testing results available upon request."
          />
          <DogCard
            name="Oliver of LoveALabradoodle"
            imageSrc="/images/dogs/oliver.png"
            imageAlt="Oliver — stud"
            details={[
              { label: "ALAA", value: "Registered" },
              { label: "Color", value: "Red Tuxedo" },
              { label: "Size", value: "Mini — 15 inches, ~27 lbs (est.)" },
              {
                label: "Health Clearances",
                value: "OFA Hips/Elbows, Heart Normal, vWD Clear, EIC Clear, CERF",
              },
            ]}
            note="This dog contributed genetically to the breeding program. Other testing results available upon request."
          />
          <DogCard
            name="South Florida Presley @ Sacto Labradoodles"
            imageSrc="/images/dogs/presley.png"
            imageAlt="Presley — stud"
            details={[
              { label: "WALA", value: "00059873" },
              { label: "ALAA", value: "126085" },
              { label: "Color", value: "Red" },
              { label: "Size", value: "Medium — 20 inches, 29 lbs" },
              {
                label: "Health Clearances",
                value: "OFA Hips/Elbows, Heart Normal, vWD Clear, EIC Clear, CERF",
              },
            ]}
            note="This dog contributed genetically to the breeding program. Other testing results available upon request."
          />
          <DogCard
            name="Rudy of County Labradoodles"
            imageSrc="/images/dogs/rudy.png"
            imageAlt="Rudy — stud"
            imageFit="contain"
            details={[
              { label: "WALA", value: "Registered" },
              { label: "ALAA", value: "Registered" },
              { label: "Color", value: "Red" },
              { label: "Size", value: "Medium — 17 inches, 35 lbs" },
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
