import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Car, Clock, Mail, MapPin } from "lucide-react";
import { Animations } from "@/components/site/animations";
import { ContactForm } from "@/components/site/contact-form";
import { CtaButton } from "@/components/site/cta-button";
import { Container } from "@/components/site/primitives";
import { contact, team } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <Animations />
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:min-h-[560px] lg:grid-cols-12 lg:gap-10 lg:py-20">
          <div data-hero className="lg:col-span-5">
            <h1 className="max-w-[12ch] font-serif text-[clamp(2.6rem,5vw,4.35rem)] leading-[1.04] tracking-[-0.025em]">
              Let’s Build
              <br />
              What’s Next.
            </h1>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-white/85 sm:text-lg">
              Whether you’re a property owner, investor, tenant, or partner, our team is ready to help you take the next step.
            </p>
            <div className="mt-7">
              <CtaButton className="shadow-none bg-gold-600 text-white hover:bg-[#206650]">Schedule a Consultation</CtaButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[680px] lg:col-span-7">
            <div className="relative ml-auto aspect-[16/11] w-[88%] overflow-hidden">
              <div data-hero-image className="absolute inset-0">
                <Image
                  src="/img/contact-hero.jpg"
                  alt="A welcoming modern living room"
                  fill
                  preload
                  sizes="(min-width: 1024px) 48vw, 88vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute bottom-[-12px] left-0 aspect-square w-[30%] overflow-hidden">
              <Image
                src="/img/office.jpg"
                alt="The NUMU office in Oakbrook Terrace"
                fill
                sizes="(min-width: 1024px) 200px, 30vw"
                className="object-cover brightness-75"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white">
        <Container>
          <ul data-stagger className="grid gap-x-10 gap-y-7 py-8 md:grid-cols-2 lg:grid-cols-3 lg:py-9">
            <li className="flex items-start gap-4">
              <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-500" strokeWidth={1.7} />
              <div className="min-w-0">
                <p className="text-base font-semibold text-navy-900">Email our team</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block break-all text-base text-navy-900 underline decoration-gold-500/60 underline-offset-4 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                >
                  {contact.email}
                </a>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">We typically respond within one business day.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-500" strokeWidth={1.7} />
              <div>
                <p className="text-base font-semibold text-navy-900">Visit our office</p>
                <a
                  href="#office"
                  className="mt-1 inline-block text-base text-navy-900 underline decoration-gold-500/60 underline-offset-4 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                >
                  Oakbrook Terrace, IL
                </a>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">Meet with us in person or virtually.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <CalendarCheck aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-500" strokeWidth={1.7} />
              <div>
                <p className="text-base font-semibold text-navy-900">Book a meeting</p>
                <CtaButton
                  variant="gold"
                  className="mt-1 min-h-0 bg-transparent px-0 py-1 font-serif text-lg text-navy-900 shadow-none hover:bg-transparent hover:text-gold-600"
                >
                  Schedule a Consultation
                </CtaButton>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">Let’s discuss your needs.</p>
              </div>
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-cream py-12 sm:py-16 lg:py-20">
        <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14">
          <div role="region" aria-label="Contact form" data-reveal className="bg-white lg:col-span-7">
            <ContactForm />
          </div>

          <div id="office" data-reveal className="scroll-mt-28 lg:col-span-5">
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-navy-900 sm:text-4xl">
              Our Oakbrook Terrace Office
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Visit us at 1S280 Summit Avenue. We’re happy to meet in person or virtually.
            </p>

            <div className="relative mt-7 aspect-[16/10] overflow-hidden">
              <Image
                src="/img/office.jpg"
                alt="Interior of the NUMU office in Oakbrook Terrace"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <ul className="mt-6 grid gap-4 text-base leading-relaxed text-navy-900">
              <li className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <address className="not-italic">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
              <li className="flex items-start gap-3">
                <Mail aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all underline decoration-gold-500/60 underline-offset-4 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>{contact.hours}</span>
              </li>
              <li className="flex items-start gap-3">
                <Car aria-hidden="true" className="mt-1 size-5 shrink-0 text-gold-600" strokeWidth={1.7} />
                <span>Free parking available</span>
              </li>
            </ul>
          </div>

          <a
            data-reveal
            href="https://www.google.com/maps/search/?api=1&query=1S280+Summit+Avenue+Unit+E2+Suite+2P+Oakbrook+Terrace+IL+60181"
            target="_blank"
            rel="noreferrer"
            className="relative block aspect-[2000/667] w-full overflow-hidden rounded-[5px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 lg:col-span-12"
            aria-label="Open the NUMU office location in Google Maps"
          >
            <Image
              src="/img/contact-map.png"
              alt="Illustrative map of Oakbrook Terrace showing NUMU Property Management at 1S280 Summit Avenue"
              fill
              sizes="(min-width: 1280px) 1184px, calc(100vw - 2rem)"
              className="object-cover"
            />
          </a>
        </Container>
      </section>

      <section className="bg-sand py-14 sm:py-16 lg:py-20">
        <Container>
          <div data-reveal className="max-w-2xl">
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-navy-900 sm:text-4xl">Speak with our team</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-700">
              Connect directly with the person best suited to help with your property, investment, or partnership.
            </p>
          </div>

          <ul data-stagger className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-16">
            {team.map((member, index) => (
              <li key={member.name} className="flex min-w-0 items-start gap-4 sm:gap-5">
                <div className={`relative aspect-[4/5] shrink-0 overflow-hidden ${index === 0 ? "w-32 sm:w-40" : "w-28 sm:w-36"}`}>
                  <Image
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    fill
                    sizes="(min-width: 1024px) 160px, (min-width: 640px) 144px, 112px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
                <div className="min-w-0 pt-1">
                  <h3 className="font-serif text-xl leading-snug text-navy-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-700">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{member.focus}</p>
                  <a
                    href={`mailto:${member.email}`}
                    className="mt-4 inline-flex max-w-full items-start gap-2 break-all py-1 text-sm text-navy-900 underline decoration-gold-500/60 underline-offset-4 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                  >
                    <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold-600" strokeWidth={1.7} />
                    <span className="min-w-0 break-all">{member.email}</span>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block py-1 text-sm font-medium text-navy-900 underline underline-offset-4 hover:text-gold-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500"
                  >
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
