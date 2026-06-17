import Link from "next/link";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-brand-muted/40">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-brand-accent">
              {site.location}
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-brand sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-foreground/70">
              Welcome to {site.name}. We raise healthy, well-socialized {site.breed}{" "}
              and would love to help you find your next companion.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/inquiries"
                className="rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
              >
                Inquire about a puppy
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-brand/20 px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-brand/5"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Hero image placeholder — swap for a <next/image> hero photo */}
          <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-brand/30 bg-white/60 text-sm text-foreground/40">
            Hero photo goes here
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 flex aspect-square items-center justify-center rounded-2xl border border-dashed border-brand/30 bg-brand-muted/30 text-sm text-foreground/40 md:order-1">
            Photo of you / your dogs
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold tracking-tight text-brand">About us</h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              Tell your story here — how you got started, your approach to raising and
              socializing your dogs, health testing, and what makes your puppies special.
              This text is a placeholder; replace it with your own words.
            </p>
            <ul className="mt-6 space-y-2 text-foreground/70">
              <li>• Health-tested parents</li>
              <li>• Raised in a loving home environment</li>
              <li>• Lifetime breeder support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Upcoming litter */}
      <section className="bg-brand-muted/40">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-brand">
            Upcoming litter
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-foreground/70">
            Share details about your expected litter here — the parents, expected date,
            and how the waitlist works. When you&apos;re ready, prospective families can
            reach out through the inquiry page.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {["Dam", "Sire", "Expected puppies"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-brand/10 bg-white/70 p-6"
              >
                <div className="mb-4 flex aspect-square items-center justify-center rounded-xl border border-dashed border-brand/30 text-xs text-foreground/40">
                  Photo
                </div>
                <p className="font-medium text-brand">{label}</p>
                <p className="mt-1 text-sm text-foreground/60">Details coming soon</p>
              </div>
            ))}
          </div>

          <Link
            href="/inquiries"
            className="mt-10 inline-block rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            Join the waitlist
          </Link>
        </div>
      </section>
    </main>
  );
}
