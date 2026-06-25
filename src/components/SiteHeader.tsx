import Image from "next/image";
import Link from "next/link";
import { nav } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Lily's Labradoodles"
            width={180}
            height={72}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-bold text-foreground transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
