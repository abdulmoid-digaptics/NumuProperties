import type { Metadata } from "next";
import Image from "next/image";
import { ChartColumnIncreasing, ChevronRight, Handshake, House, Settings, Users } from "lucide-react";
import { Check } from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import { Container, Eyebrow, Gold, Heading, HeroActions, HeroLead, PageHero, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Our Partners"
};

const partners = [
  {
    name: "Workspace Junction",
    logo: "/img/logo-workspace.png",
    logoSize: [150, 101],
    category: "Operations & On-Site Support",
    color: "#0e3421",
    text: "Workspace Junction supports our properties with mail handling, package delivery, key management, and administrative services. They help ensure smooth day-to-day operations and an excellent resident experience.",
    image: "/img/partner-workspace.jpg",
    items: ["Mail & package handling", "Key management & access support", "Administrative services", "Resident support and communication"],
  },
  {
    name: "MidWest Pond Services",
    logo: "/img/logo-midwest.png",
    logoSize: [162, 50],
    category: "Landscaping & Outdoor Care",
    color: "#1f6fb2",
    text: "MidWest Pond Services keeps our properties beautiful, safe, and well-maintained. They provide professional landscaping, pond maintenance, seasonal cleanups, and outdoor enhancements to maintain curb appeal and property value.",
    image: "/img/partner-midwest.jpg",
    items: ["Landscaping & lawn care", "Pond and water feature maintenance", "Seasonal cleanups (spring/fall)", "Outdoor enhancements and repairs"],
  },
  {
    name: "360 Growth Lab",
    logo: "/img/logo-360.png",
    logoSize: [552, 146],
    category: "Technology & Digital Solutions",
    color: "#15233a",
    check: "#1f5f3a",
    text: "360 Growth Lab partners with us to bring modern technology into our operations. From property websites and resident portals to CRM, automation, and digital marketing, they help us run smarter and more efficiently.",
    image: "/img/partner-360.jpg",
    items: ["Property websites and listing management", "CRM and automation", "Resident portals and communication tools", "Digital marketing and lead generation"],
  },
  {
    name: "Craft Build Renovators",
    logo: "/img/logo-craftbuild.png",
    logoSize: [389, 304],
    category: "Repairs & General Contracting",
    color: "#be8e46",
    check: "#0f304a",
    text: "Craft Build Renovators provides reliable repair and construction services. From routine maintenance to larger renovations, they ensure our properties are safe, functional, and always looking their best.",
    image: "/img/partner-impact.jpg",
    items: ["General repairs and maintenance", "Renovations and unit upgrades", "Emergency repair services", "Quality workmanship and timely service"],
  },
  {
    name: "Prime Clean",
    logo: "/img/logo-prime.png",
    logoSize: [144, 44],
    category: "Cleaning & Turnover Services",
    color: "#3b8a3e",
    text: "Prime Clean delivers professional cleaning services for move-ins, move-outs, and ongoing property maintenance. Their detailed cleaning helps us maintain high standards and provide fresh, welcoming spaces for every resident.",
    image: "/img/partner-prime.jpg",
    items: ["Move-in / move-out cleaning", "Common area cleaning", "Recurring cleaning services", "Deep cleaning and special projects"],
  },
  {
    name: "SecureNow",
    logo: "/img/logo-securenow.png",
    logoSize: [145, 46],
    category: "Security & Safety Solutions",
    color: "#1d3f7a",
    text: "SecureNow helps keep our properties and residents safe with modern security solutions, including access control, camera systems, and 24/7 monitoring support.",
    image: "/img/partner-securenow.jpg",
    items: ["Security camera installation and monitoring", "Access control systems", "24/7 support and incident response", "Enhanced safety for residents and assets"],
  },
];

const together = [
  { icon: Users, label: "Trusted Partners" },
  { icon: Settings, label: "Coordinated Services" },
  { icon: ChartColumnIncreasing, label: "Higher Property Value" },
  { icon: House, label: "Better Resident Experience" },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Partners"
        image="/img/partners-hero.jpg"
        imageAlt="Two professionals shaking hands outside a modern residential building"
        imageClassName="object-[30%_center]"
        title={
          <>
            Stronger Together <Gold>for Better Communities.</Gold>
          </>
        }
      >
        <HeroLead>
          We collaborate with trusted partners to deliver exceptional property management experiences. Each partner
          plays a unique role in helping us maintain, improve, and add value to your property.
        </HeroLead>
        <HeroActions>
          <CtaButton href="/contact">Partner With Us</CtaButton>
        </HeroActions>
      </PageHero>

      <Section tone="cream">
        <Container>
          <div data-reveal className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Eyebrow line>Our Partner Network</Eyebrow>
              <Heading className="mt-3 text-navy-900">Trusted Partners. Real Value.</Heading>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              We work with a select group of trusted organizations to ensure every aspect of your property is
              professionally managed — from operations and maintenance to technology and resident experience.
            </p>
          </div>
          <ul data-stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((p) => (
              <li key={p.name}>
                <article className="flex h-full flex-col rounded-xl border border-black/5 bg-white p-5 shadow-[0_14px_40px_-26px_rgba(11,28,51,0.45)] sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <Image src={p.logo} alt={`${p.name} logo`} width={p.logoSize[0]} height={p.logoSize[1]} className="h-11 max-w-[58%] w-auto object-contain" />
                    <p className="max-w-[140px] text-right text-[13px] leading-snug font-bold" style={{ color: p.color }}>
                      {p.category}
                    </p>
                  </div>
                  <p className="mt-4 text-[13px] leading-relaxed text-slate-600">{p.text}</p>
                  <div className="relative mt-4 aspect-[306/112] overflow-hidden rounded-md">
                    <Image src={p.image} alt="" fill sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <ul className="mt-4 space-y-2">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[13px] text-ink">
                        <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: p.check ?? p.color }}>
                          <Check className="size-2.5" strokeWidth={3.5} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Working together */}
      <section className="relative isolate overflow-hidden bg-navy-900 py-14 text-white sm:py-16">
        <div className="absolute inset-0 -z-10">
          <Image src="/img/tenants-testimonial.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/85 to-navy-900/70" />
        </div>
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>Working Together</Eyebrow>
            <Heading className="mt-3 text-white">A Complete Solution for Property Success.</Heading>
          </div>
          <ul data-stagger className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {together.map((t, i) => (
              <li key={t.label} className="relative flex flex-col items-center text-center">
                <span className="inline-flex size-16 items-center justify-center rounded-full border border-gold-400/80 text-gold-400 sm:size-[72px]">
                  <t.icon className="size-7" strokeWidth={1.4} />
                </span>
                <span className="mt-3 text-[13px] font-semibold">{t.label}</span>
                {i < together.length - 1 && <ChevronRight aria-hidden className="absolute top-6 -right-6 hidden size-5 text-white/50 sm:block" />}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Become a partner */}
      <section className="bg-cream py-10 sm:py-12">
        <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div data-reveal className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <span className="inline-flex size-[72px] shrink-0 items-center justify-center rounded-full bg-[#f1e4cf] text-gold-600">
              <Handshake className="size-9" strokeWidth={1.3} />
            </span>
            <div>
              <h2 className="font-serif text-2xl text-navy-900">Interested in Partnering with NUMU?</h2>
              <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-slate-600">
                We’re always open to collaborating with trusted organizations that share our commitment to quality,
                service, and community.
              </p>
            </div>
          </div>
          <CtaButton href="/contact" className="self-start md:self-center">
            Become a Partner
          </CtaButton>
        </Container>
      </section>
    </>
  );
}
