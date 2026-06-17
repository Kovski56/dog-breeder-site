// Central place for site-wide content and contact details.
// Edit these values once and they update everywhere on the site.

export const site = {
  // TODO: replace with the kennel / business name
  name: "Kennel Name",
  tagline: "Thoughtfully raised dogs, ready for their forever homes.",
  // TODO: replace with the breed(s) she raises
  breed: "our breed",
  // TODO: replace with real contact details
  email: "hello@example.com",
  phone: "(555) 555-5555",
  location: "Your City, State",
  social: {
    facebook: "",
    instagram: "",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/inquiries", label: "Puppy Inquiries" },
] as const;
