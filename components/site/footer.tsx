import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, mainNav } from "@/lib/site";
import { Logo } from "./logo";
import { CtaButton } from "./cta-button";
import { Container, CtaBand } from "./primitives";

const social = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.78-2.06 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.05c0-1.2-.02-2.76-1.68-2.76-1.69 0-1.95 1.32-1.95 2.67V21h-4V9.75Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    path: "M12 7.4a4.6 4.6 0 1 0 0 9.2 4.6 4.6 0 0 0 0-9.2Zm0 7.6a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5.85-7.8a1.07 1.07 0 1 1-2.15 0 1.07 1.07 0 0 1 2.15 0ZM12 3.6c2.73 0 3.06.01 4.14.06 2.78.13 4.07 1.44 4.2 4.2.05 1.08.06 1.4.06 4.14s-.01 3.06-.06 4.14c-.13 2.75-1.42 4.07-4.2 4.2-1.08.05-1.4.06-4.14.06s-3.06-.01-4.14-.06c-2.79-.13-4.07-1.45-4.2-4.2C3.61 15.06 3.6 14.74 3.6 12s.01-3.06.06-4.14c.13-2.76 1.42-4.07 4.2-4.2C8.94 3.61 9.27 3.6 12 3.6Z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com",
    path: "M13.5 21v-7.5H16l.5-3h-3V8.6c0-.87.3-1.6 1.6-1.6h1.5V4.3c-.3-.04-1.2-.12-2.3-.12-2.3 0-3.8 1.4-3.8 3.9v2.4H8v3h2.5V21h3Z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z",
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <CtaBand
        image="/img/inv-featured.jpg"
        title={<span className="text-gold-400 uppercase">Ready to experience a higher standard?</span>}
        text="Let’s discuss how NUMU can help you achieve simpler ownership and stronger returns."
        actions={
          <>
            <CtaButton>Schedule a Consultation</CtaButton>
            <CtaButton variant="navy" arrow={false} className="border border-white/20">
              Get a Proposal
            </CtaButton>
          </>
        }
      />
      <Container className="grid gap-8 py-10 md:grid-cols-[auto_1fr] md:items-center lg:grid-cols-[auto_1fr_auto] lg:gap-12">
        <Logo className="h-24 sm:h-28" />

        <div className="space-y-4">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/85">
              {mainNav.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-gold-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[13px] text-white/75">
            <li>
              <a href={contact.phoneHref} className="inline-flex items-center gap-2 hover:text-gold-400">
                <Phone className="size-3.5 text-gold-400" /> {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 break-all hover:text-gold-400">
                <Mail className="size-3.5 shrink-0 text-gold-400" /> {contact.email}
              </a>
            </li>
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-3.5 text-gold-400" /> Nationwide
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1 lg:items-end">
          <ul className="flex gap-3">
            {social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:border-gold-400 hover:text-gold-400"
                >
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <div className="lg:text-right">
            <p className="font-serif text-[15px]">Property Stewardship, Reimagined.</p>
            <p className="mt-1 text-xs text-white/55">© 2026 NUMU Property Management. All rights reserved.</p>
            <p className="mt-1 text-xs text-white/55">
              Designed and developed by{" "}
              <a href="https://360growthlab.com" className="hover:text-gold-400">
                360growthlab
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
