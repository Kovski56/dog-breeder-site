import DogCard from "@/components/DogCard";

export default function OurBoysPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-center text-4xl font-bold text-brand">
          Our Boys
        </h1>
        <div className="max-w-sm mx-auto">
          <DogCard
            name="Fairytale Lane's Roo @ Sacto"
            imageSrc="/images/dogs/roo.jpg"
            imageAlt="Roo - our stud"
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
            note="Other testing results available upon request."
          />
        </div>
      </section>
    </main>
  );
}
