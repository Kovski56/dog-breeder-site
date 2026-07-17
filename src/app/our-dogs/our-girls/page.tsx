import DogCard from "@/components/DogCard";

export default function OurGirlsPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-center text-4xl font-bold text-brand">
          Our Girls
        </h1>
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Full health info pending from client */}
          <DogCard
            name="Ruby"
            imageSrc="/images/dogs/ruby.jpg"
            imageAlt="Ruby - our dam"
            details={[
              { label: "Role", value: "Dam (Mother)" },
              { label: "ALAA", value: "Pending" },
              { label: "Color", value: "Red Tuxedo" },
              { label: "Size", value: "Medium / Small — 15 inches, 34 lbs" },
              {
                label: "Health Clearances",
                value:
                  "OFA Hips/Elbows, Heart Normal, vWD Clear, EIC Clear, DM Clear, HNP Clear, PRA Clear, CERF",
              },
            ]}
            note="Other testing results available upon request."
          />
          <DogCard
            name="Lucille Doll of Lilyslabradoodles"
            imageSrc="/images/dogs/lucille.jpg"
            imageAlt="Lucille Doll"
            imageFit="contain"
            details={[
              { label: "WALA", value: "Pending" },
              { label: "ALAA", value: "Pending" },
              { label: "Color", value: "Chocolate Phantom Tuxedo" },
              { label: "Size", value: "Small Medium" },
              { label: "Weight", value: "30 lbs" },
            ]}
            note="Other testing results available upon request."
          />
        </div>
      </section>
    </main>
  );
}
