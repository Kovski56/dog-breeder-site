import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-brand-muted/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-base font-semibold text-brand">{site.name}</p>
          <p className="mt-1 max-w-xs text-sm text-foreground/60">{site.tagline}</p>
        </div>

        <div className="text-sm">
          <p className="font-medium text-foreground/80">Contact</p>
          <ul className="mt-2 space-y-1 text-foreground/60">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-foreground">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone}`} className="hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>

        <nav className="text-sm">
          <p className="font-medium text-foreground/80">Pages</p>
          <ul className="mt-2 space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-foreground/60 hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-black/5 px-6 py-4 text-center text-xs text-foreground/50">
        © {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
