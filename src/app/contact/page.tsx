import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-brand">Contact Us</h1>
        <p className="mt-4 text-foreground/70">
          We&apos;d love to hear from you! Please use our inquiry form to get in
          touch and we&apos;ll get back to you as soon as possible.
        </p>
        <div className="mt-8">
          <Link
            href="/inquiries"
            className="inline-block rounded-xl bg-brand px-8 py-3 font-bold text-white transition-colors hover:bg-brand-muted"
          >
            Go to Inquiry Form
          </Link>
        </div>
      </div>
    </main>
  );
}
