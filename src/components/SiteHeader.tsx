"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href?: string;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Puppies",
    children: [
      { label: "Upcoming Litters", href: "/#upcoming-litter" },
      { label: "Apply To Adopt", href: "/inquiries" },
    ],
  },
  {
    label: "Our Dogs",
    children: [
      { label: "Our Boys", href: "/our-dogs/our-boys" },
      { label: "Our Girls", href: "/our-dogs/our-girls" },
    ],
  },
  {
    label: "Guardian Program",
    children: [
      { label: "Guardian Program", href: "/guardian-program" },
      { label: "Guardian Application", href: "/guardian-program/application" },
      {
        label:
          "Contact Michelle at Lilyslabradoodles@gmail.com for additional information about Guardianship opportunities.",
        href: "mailto:Lilyslabradoodles@gmail.com",
      },
    ],
  },
  { label: "FAQ", href: "/faq" },
  {
    label: "Resources",
    children: [
      { label: "Food & Supplements", href: "/resources" },
      {
        label: "Shopping Essentials (Amazon)",
        href: "https://www.amazon.com/hz/wishlist/ls/3G0FTAFNV4PWJ?ref_=wl_share",
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);

  function toggleMobileSection(label: string) {
    setMobileExpanded((prev) => (prev === label ? null : label));
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo.png"
            alt="Lily's Labradoodles"
            width={320}
            height={128}
            className="h-20 w-auto object-contain sm:h-24"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDesktopOpen(item.label)}
                onMouseLeave={() => setDesktopOpen(null)}
              >
                <button className="flex items-center gap-1 rounded px-3 py-2 text-sm text-foreground transition-colors hover:text-brand">
                  {item.label}
                  <span className="text-xs">▾</span>
                </button>
                {desktopOpen === item.label && (
                  <div className="absolute left-0 top-full z-50 min-w-[180px] rounded-lg border border-gray-100 bg-white py-1 shadow-lg">
                    {item.children.map((child) => {
                      if (child.href.startsWith("mailto:")) {
                        return (
                          <a
                            key={child.href}
                            href={child.href}
                            className="block w-60 whitespace-normal px-4 py-2 text-xs leading-snug text-foreground/80 transition-colors hover:bg-soft-beige hover:text-brand"
                          >
                            {child.label}
                          </a>
                        );
                      }
                      if (child.href.startsWith("http")) {
                        return (
                          <a
                            key={child.href}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-soft-beige hover:text-brand"
                          >
                            {child.label}
                          </a>
                        );
                      }
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-soft-beige hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="rounded px-3 py-2 text-sm text-foreground transition-colors hover:text-brand"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Hamburger button */}
        <button
          className="flex items-center justify-center rounded p-2 text-2xl text-foreground transition-colors hover:text-brand lg:hidden"
          aria-label="Toggle menu"
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setMobileExpanded(null);
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto w-full max-w-7xl px-6 py-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="flex w-full items-center justify-between py-3 text-sm text-foreground hover:text-brand"
                    onClick={() => toggleMobileSection(item.label)}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs">
                      {mobileExpanded === item.label ? "▴" : "▾"}
                    </span>
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="mb-1 ml-4 flex flex-col border-l-2 border-soft-beige pl-4">
                      {item.children.map((child) => {
                        if (child.href.startsWith("mailto:")) {
                          return (
                            <a
                              key={child.href}
                              href={child.href}
                              className="py-2 text-xs leading-snug text-foreground/80 hover:text-brand"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          );
                        }
                        if (child.href.startsWith("http")) {
                          return (
                            <a
                              key={child.href}
                              href={child.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 text-sm text-foreground hover:text-brand"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          );
                        }
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="py-2 text-sm text-foreground hover:text-brand"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="block py-3 text-sm text-foreground hover:text-brand"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
