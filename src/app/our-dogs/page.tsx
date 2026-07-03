import Link from "next/link";

export default function OurDogsPage() {
  return (
    <main className="flex-1">
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h1 className="mb-10 text-center text-4xl font-bold text-brand">
          Our Dogs
        </h1>
        <div className="grid gap-6 sm:grid-cols-2">
          <Link
            href="/our-dogs/our-boys"
            className="flex items-center justify-center rounded-2xl bg-brand py-16 text-center text-2xl font-bold text-white transition-transform hover:scale-105"
          >
            Our Boys
          </Link>
          <Link
            href="/our-dogs/our-girls"
            className="flex items-center justify-center rounded-2xl bg-brand py-16 text-center text-2xl font-bold text-white transition-transform hover:scale-105"
          >
            Our Girls
          </Link>
        </div>
      </section>
    </main>
  );
}
