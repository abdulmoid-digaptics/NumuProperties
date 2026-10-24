import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Car, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { CtaButton } from "@/components/site/cta-button";
import { Container, Eyebrow, Gold, Heading, HeroLead, PageHero } from "@/components/site/primitives";
import { contact, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact"
};

function SolidIcon({ icon: Icon }: { icon: typeof Phone }) {
  return (
    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400">
      <Icon className="size-5" strokeWidth={1.7} />
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact NUMU"
        image="/img/contact-hero.jpg"
        imageAlt="Modern townhomes with glass balconies lit at dusk"
        title={
          <>
            Let’s Build <Gold>What’s Next.</Gold>
          </>
        }
      >
        <HeroLead>
          Whether you’re a property owner, investor, tenant, or partner, we’re here to help. Get in touch with our team
          to discuss your goals and discover how NUMU Property Management can create value for your property.
        </HeroLead>
      </PageHero>

      {/* Contact methods */}
      <section className="border-b border-black/5 bg-white">
        <Container>
          <ul data-stagger className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            <li className="flex gap-4 py-6 xl:pr-6">
              <SolidIcon icon={Phone} />
              <div>
                <p className="text-sm font-semibold text-navy-900">Call Us</p>
                <a href={contact.phoneHref} className="inline-block py-1 font-serif text-lg text-navy-900 hover:text-gold-600">
                  {contact.phone}
                </a>
                <p className="text-xs text-slate-500">{contact.hours}</p>
              </div>
            </li>
            <li className="flex gap-4 py-6 sm:pl-6 xl:border-l xl:border-black/10 xl:px-6">
              <SolidIcon icon={Mail} />
              <div className="min-w-0">
                <p className="text-sm font-semibold text-navy-900">Email Us</p>
                <a href={`mailto:${contact.email}`} className="block py-1 font-serif text-[15px] break-words text-navy-900 hover:text-gold-600">
                  {contact.email}
                </a>
                <p className="text-xs text-slate-500">We typically respond within one business day.</p>
              </div>
            </li>
            <li className="flex gap-4 py-6 xl:border-l xl:border-black/10 xl:px-6">
              <SolidIcon icon={MapPin} />
              <div>
                <p className="text-sm font-semibold text-navy-900">Visit Our Office</p>
                <p className="font-serif text-lg text-navy-900">Oakbrook Terrace, IL</p>
                <p className="text-xs text-slate-500">Schedule a meeting in person or virtually.</p>
              </div>
            </li>
            <li className="flex gap-4 py-6 sm:pl-6 xl:border-l xl:border-black/10 xl:px-6">
              <SolidIcon icon={CalendarCheck} />
              <div>
                <p className="text-sm font-semibold text-navy-900">Book a Meeting</p>
                <CtaButton variant="gold" className="mt-0.5 min-h-0 bg-transparent px-0 py-1 font-serif text-lg text-gold-600 shadow-none hover:bg-transparent hover:text-gold-500">
                  Schedule a Call
                </CtaButton>
                <p className="text-xs text-slate-500">Let’s discuss your needs.</p>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      {/* Form + office */}
      <section className="bg-cream py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <div data-reveal className="rounded-xl border border-black/5 bg-white p-5 shadow-[0_14px_40px_-26px_rgba(11,28,51,0.45)] sm:p-8">
            <Eyebrow>Send Us a Message</Eyebrow>
            <Heading className="mt-3 text-navy-900">We’d Love to Hear From You</Heading>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Fill out the form below, then open your email app to review and send your message.
            </p>
            <ContactForm />
          </div>

          <div data-reveal className="flex flex-col gap-6">
            <div className="grid overflow-hidden rounded-xl border border-black/5 bg-white sm:grid-cols-2">
              <div className="relative min-h-[220px]">
                <Image src="/img/office.jpg" alt="NUMU office building in Oakbrook Terrace" fill sizes="(min-width: 640px) 25vw, 100vw" className="object-cover" />
              </div>
              <div className="p-5 sm:p-6">
                <Eyebrow>Our Office</Eyebrow>
                <p className="mt-2 font-serif text-xl text-navy-900">Oakbrook Terrace, Illinois</p>
                <ul className="mt-4 space-y-3 text-[13px] text-ink">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-gold-500" />
                    <address className="not-italic">
                      {contact.address.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="size-4 shrink-0 text-gold-500" />
                    <a href={contact.phoneHref} className="inline-block py-1 hover:text-gold-600">
                      {contact.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="size-4 shrink-0 text-gold-500" />
                    <a href={`mailto:${contact.email}`} className="inline-block py-1 break-words hover:text-gold-600">
                      {contact.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="size-4 shrink-0 text-gold-500" />
                    {contact.hours}
                  </li>
                  <li className="flex gap-3">
                    <Car className="size-4 shrink-0 text-gold-500" />
                    Free Parking Available
                  </li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=17W574+Butterfield+Road+Oakbrook+Terrace+IL+60181"
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[16/7] w-full overflow-hidden rounded-xl border border-black/5 sm:aspect-[697/180] lg:aspect-auto lg:min-h-48 lg:flex-1"
              aria-label="Open the NUMU office location in Google Maps"
            >
              <Image src="/img/map.jpg" alt="Map showing the NUMU office in Oakbrook Terrace" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </a>
          </div>
        </Container>
      </section>

      {/* Direct contact */}
      <section className="bg-sand py-14 sm:py-16 lg:py-20">
        <Container>
          <div data-reveal>
            <Eyebrow>Speak With Our Team</Eyebrow>
            <Heading className="mt-3 text-navy-900">Direct Contact</Heading>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">Connect with the right team member for your needs.</p>
          </div>
          <ul data-stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name} className="flex flex-col overflow-hidden rounded-xl border border-black/5 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={m.image} alt={`Portrait of ${m.name}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-[center_20%]" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="font-serif text-lg font-semibold text-navy-900">{m.name}</p>
                  <p className="text-xs text-slate-500">{m.role}</p>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{m.focus}</p>
                  <a href={`mailto:${m.email}`} className="mt-3 flex items-center gap-1.5 py-1 text-[13px] break-all text-ink hover:text-gold-600">
                    <Mail className="size-3.5 shrink-0 text-gold-500" />
                    {m.email}
                  </a>
                  <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="py-1 text-[13px] font-medium text-gold-600 underline underline-offset-2 hover:text-gold-500">
                    Connect on LinkedIn
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
