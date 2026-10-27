import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Premium dog training from Right Turn Obedience — programs for puppies and dogs of all sizes, with 2 free home sessions included.",
};

const PHONE_DISPLAY = "442-242-5244";
const PHONE_HREF = "tel:+14422425244";

type Program = {
  name: string;
  popular?: boolean;
  includes?: string;
  items: string[];
  price: string;
  duration: string;
  extra?: string;
};

const programs: Program[] = [
  {
    name: "Doggie Good Start",
    popular: true,
    items: [
      "Potty Training",
      "Crate Training",
      "Recall",
      "Loose Leash Walking",
      "Sit, Down, Wait, Leave it, No Nipping, No Jumping, Door Manners",
      "House Manners/Rules (What not to chew, no rough housing, etc.)",
    ],
    price: "$1,500",
    duration: "2 weeks",
  },
  {
    name: "Doggie *Extra* Good Start",
    includes: "Includes everything in Doggie Good Start, plus:",
    items: [
      "Socialization Training (appropriate for age)",
      "Place Work",
      "Better Foundation For Potty Training",
      "Public Access Work",
      "Obedience Practice",
    ],
    price: "$2,100",
    duration: "3 weeks",
  },
  {
    name: "Beginner Level Program",
    includes: "Includes everything in Doggie Good Start, plus:",
    items: [
      "Increased Time, Difficulty, and Distractions (learned from Doggie Good Start)",
      "Place Work",
      "Child Introduction",
      "Grooming Manners",
      "Travel Training",
      "Sitting While Meeting New People (and proper greetings of guests)",
      "Meeting with Other Dogs (and proper reactions when experiencing distractions)",
      "Control and Patience Appropriate for Age",
      "If Over 4 Months, this Program will Expose & Train in Public Places",
    ],
    price: "$3,000",
    duration: "4 weeks",
    extra: "CGC training available",
  },
  {
    name: "Advanced Level Program",
    includes: "Includes everything in Beginner Level, plus:",
    items: [
      "Increased Time, Difficulty, Distractions + Mastering All Skills (learned from Intermediate Level)",
      "1-Week Refresher",
      "2 Free Home Sessions Included",
      "2 Problem-Solving Sessions Throughout Year",
      "Graduation (possible beach and/or Disneyland day)",
    ],
    price: "Call for quote",
    duration: "8 weeks",
  },
];

const photos = [
  {
    src: "/images/training/training-1.jpg",
    width: 430,
    height: 416,
    alt: "Autumn working on focus with a small puppy in a backyard",
  },
  {
    src: "/images/training/training-2.jpg",
    width: 246,
    height: 412,
    alt: "Autumn training a dog on leash in a pet store",
  },
  {
    src: "/images/training/training-3.jpg",
    width: 258,
    height: 522,
    alt: "Autumn leading a group of puppies through a lesson on the lawn",
  },
  {
    src: "/images/training/training-4.jpg",
    width: 430,
    height: 524,
    alt: "Autumn holding three puppies",
  },
];

function Bullet() {
  return (
    <span aria-hidden="true" className="mt-[0.2rem] shrink-0 font-bold text-brand-accent">
      •
    </span>
  );
}

function ProgramCard({ program }: { program: Program }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ${
        program.popular ? "ring-2 ring-brand-accent" : "ring-black/5"
      }`}
    >
      {program.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-brand-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
          Most Popular
        </span>
      )}

      <h3 className="text-2xl font-bold text-brand">{program.name}</h3>
      {program.includes && (
        <p className="mt-2 font-bold italic text-foreground/70">{program.includes}</p>
      )}

      <ul className="mt-4 space-y-2 text-foreground/80">
        {program.items.map((item) => (
          <li key={item} className="flex gap-2 leading-snug">
            <Bullet />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-black/5 pt-5">
          <span className="text-3xl font-bold text-brand">{program.price}</span>
          <span className="rounded-full bg-light-yellow px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
            Duration: {program.duration}
          </span>
          {program.extra && (
            <span className="rounded-full bg-light-green px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand">
              {program.extra}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function TrainingPage() {
  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="bg-main-green-dark py-14 text-center">
        <h1 className="text-5xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          Training
        </h1>
        <p className="mx-auto mt-3 max-w-xl px-6 text-xl font-bold text-white/90">
          Help your new puppy grow into a well-mannered companion.
        </p>
      </section>

      {/* Trainer intro */}
      <section className="mx-auto w-full max-w-5xl px-6 py-14">
        <div className="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-12">
          <Image
            src="/images/training/right-turn-logo.png"
            alt="Right Turn Obedience logo"
            width={254}
            height={256}
            className="mx-auto h-44 w-44 rounded-2xl shadow-md ring-1 ring-black/5 md:h-56 md:w-56"
          />
          <div className="text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-accent">
              Training Resource
            </p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-brand">
              Right Turn Obedience
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/80">
              Offering premium training services for dogs of all sizes! From puppy basics
              like potty and crate training to advanced obedience, Autumn&apos;s programs
              build the skills and manners that make life with your dog a joy.
            </p>
            <p className="mt-3 font-bold text-foreground/80">
              Autumn · {PHONE_DISPLAY} · Serving All Counties
            </p>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center whitespace-nowrap rounded bg-brand px-6 py-3 font-bold text-white shadow transition-opacity hover:opacity-90"
              >
                Call {PHONE_DISPLAY}
              </a>
              <span className="rounded-full bg-light-yellow px-5 py-2 text-sm font-bold uppercase tracking-wide text-brand">
                2 free home sessions included in all programs
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="bg-brand-muted/30">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-3xl font-bold tracking-tight text-brand">
            Training Programs
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center leading-relaxed text-foreground/70">
            Choose the program that fits your dog and your family.
          </p>

          <div className="mt-12 grid items-start gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-8">
              <ProgramCard program={programs[0]} />
              <ProgramCard program={programs[2]} />
            </div>
            <div className="flex flex-col gap-8">
              <ProgramCard program={programs[1]} />
              <ProgramCard program={programs[3]} />

              {/* Private sessions */}
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5">
                <div>
                  <h3 className="text-2xl font-bold text-brand">Private Sessions</h3>
                  <p className="mt-1 flex items-center gap-2 text-foreground/80">
                    <Bullet />
                    Price includes travel fee
                  </p>
                </div>
                <span className="text-3xl font-bold text-brand">$175</span>
              </div>
            </div>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-center text-sm italic text-foreground/60">
            Programs and pricing are set by Right Turn Obedience and may change — please
            contact Autumn to confirm.
          </p>
        </div>
      </section>

      {/* Photos */}
      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-brand">
          Training in Action
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="border-t border-black/5 bg-soft-beige">
        <div className="mx-auto w-full max-w-3xl px-6 py-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-foreground/70">
            Reach out to Autumn to talk through your puppy&apos;s needs and find the right
            program.
          </p>
          <a
            href={PHONE_HREF}
            className="mt-6 inline-flex items-center justify-center whitespace-nowrap rounded bg-brand-accent px-8 py-3 font-bold uppercase tracking-wide text-white shadow transition-opacity hover:opacity-90"
          >
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </main>
  );
}
