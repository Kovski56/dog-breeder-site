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
              { label: "Breed", value: "Multi-gen Australian Labradoodle" },
            ]}
            note="Health information coming soon."
          />
          <DogCard
            name="Lilyslabradoodles Lucille Doll"
            imageSrc="/images/dogs/lucille.jpg"
            imageAlt="Lucille Doll"
            imagePosition="object-top"
            details={[
              { label: "WALA", value: "Pending" },
              { label: "ALAA", value: "Pending" },
              { label: "Color", value: "Chocolate Phantom Tuxedo" },
              { label: "Size", value: "Mini — 16 inches, 25–26 lbs" },
              {
                label: "Health Clearances (pending)",
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
