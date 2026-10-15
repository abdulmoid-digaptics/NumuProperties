import type { Metadata } from "next";
import Image from "next/image";
import { ChartNoAxesColumnIncreasing, House, ShieldCheck, Sprout, Wrench } from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import {
  CheckList,
  Container,
  Eyebrow,
  Gold,
  Heading,
  HeroLead,
  IconRing,
  ImageCard,
  PageHero,
  Section,
} from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Services",
  description: "Complete property management, investor services and property improvements from NUMU.",
};

const pillars = [
  { icon: ShieldCheck, label: ["Protect", "Your Investment"] },
  { icon: ChartNoAxesColumnIncreasing, label: ["Simplify", "Ownership"] },
  { icon: Sprout, label: ["Grow", "Long-Term Value"] },
];

const stats = [
  { value: "98", suffix: "%", label: ["Average", "Occupancy Rate"] },
  { value: "30", suffix: "%", label: ["Lower", "Turnover"] },
  { value: null, display: "24/7", label: ["Tenant", "Support"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        image="/img/services-hero.jpg"
        imageAlt="Modern apartment balconies glowing at dusk"
        title={
          <>
            Complete Property Management. <Gold>Greater Possibilities.</Gold>
          </>
        }
      >
        <HeroLead>
          From day-to-day management to long-term investment performance, NUMU delivers a complete,
          technology-enabled solution designed to protect your assets and help them grow.
        </HeroLead>
        <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-4">
          {pillars.map((p) => (
            <li key={p.label[0]} className="flex items-center gap-3 text-[13px] leading-tight text-white/90">
              <IconRing icon={p.icon} size="sm" className="border-gold-400/80 text-gold-400" />
              <span>
                {p.label[0]}
                <br />
                {p.label[1]}
              </span>
            </li>
          ))}
        </ul>
      </PageHero>

      <Section tone="cream">
        <Container>
          <div data-reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow className="justify-center">Our Services</Eyebrow>
            <Heading className="mt-3 text-navy-900">A Complete Approach to Property Ownership</Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              NUMU offers an integrated suite of services that cover every stage of the property ownership lifecycle.
              Whether you’re a single-property owner or a growing investor, we provide the expertise, systems, and
              support to maximize your returns with less stress.
            </p>
          </div>
          <div data-stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ImageCard
              image="/img/svc-management.jpg"
              icon={House}
              title="Property Management"
              text="Full-service management for residential and multifamily properties with a focus on performance, transparency, and peace of mind."
              href="#property-management"
              linkLabel="Explore Property Management"
            />
            <ImageCard
              image="/img/type-portfolio.jpg"
              icon={ChartNoAxesColumnIncreasing}
              title="Investor Services"
              text="Strategic support for real estate investors, including acquisition guidance, portfolio management, and financial reporting."
              href="#investor-services"
              linkLabel="Explore Investor Services"
            />
            <ImageCard
              image="/img/svc-projects.jpg"
              icon={Wrench}
              title="Property Improvements"
              text="Value-driven renovations and ongoing maintenance to keep your property competitive and increase long-term value."
              href="#property-improvements"
              linkLabel="Explore Property Improvements"
            />
          </div>
        </Container>
      </Section>

      {/* Property management */}
      <section id="property-management" className=" bg-white">
        <div className="grid lg:grid-cols-2">
          <Container className="py-14 sm:py-16 lg:py-20 lg:mr-0 lg:max-w-[620px] lg:py-20 lg:pr-12">
            <div data-reveal>
              <Eyebrow>Property Management</Eyebrow>
              <Heading className="mt-3 text-navy-900">Hands-On Management. Higher Performance.</Heading>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                We handle the details so you can enjoy the benefits of ownership. Our professional management services
                are designed to protect your asset, support your tenants, and optimize your returns.
              </p>
              <CheckList
                className="mt-6"
                items={[
                  "Tenant screening and placement",
                  "Rent collection and financial reporting",
                  "Property maintenance and vendor management",
                  "Legal compliance and risk management",
                  "Owner and tenant portals with real-time updates",
                ]}
              />
              <CtaButton href="/owners" className="mt-8">
                Learn More About Property Management
              </CtaButton>
            </div>
          </Container>
          <div data-reveal className="relative min-h-[380px] sm:min-h-[440px]">
            <Image src="/img/services-pm.jpg" alt="Modern townhome community at sunset" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            <ul data-stagger className="absolute inset-x-4 bottom-6 grid grid-cols-3 gap-3 sm:inset-x-8 sm:gap-4 lg:right-10 lg:left-auto lg:w-[440px]">
              {stats.map((s) => (
                <li key={s.label[1]} className="rounded-lg bg-white/95 p-3 shadow-lg backdrop-blur sm:p-4">
                  <p
                    className="font-serif text-2xl text-navy-900 sm:text-[2rem]"
                    {...(s.value ? { "data-count": s.value, "data-suffix": s.suffix } : {})}
                  >
                    {s.value ? `${s.value}${s.suffix}` : s.display}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-slate-600 sm:text-xs">
                    {s.label[0]}
                    <br />
                    {s.label[1]}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investor services */}
      <section id="investor-services" className=" bg-sand">
        <div className="grid lg:grid-cols-2">
          <div data-reveal className="relative order-last min-h-[320px] sm:min-h-[400px] lg:order-first">
            <Image src="/img/services-investor.jpg" alt="Laptop with portfolio charts beside a model house" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <Container className="py-14 sm:py-16 lg:py-20 lg:ml-0 lg:max-w-[620px] lg:py-20 lg:pl-12">
            <div data-reveal>
              <Eyebrow>Investor Services</Eyebrow>
              <Heading className="mt-3 text-navy-900">Expert Guidance for Smarter Investments.</Heading>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Real estate is a powerful wealth-building tool. We work with investors to identify opportunities,
                analyze performance, and build strong, resilient portfolios.
              </p>
              <CheckList
                className="mt-6"
                items={[
                  "Acquisition analysis and due diligence",
                  "Portfolio strategy and oversight",
                  "Market research and investment advisory",
                  "Financial reporting and performance tracking",
                  "Coordination with financing and tax professionals",
                ]}
              />
              <CtaButton href="/investors" className="mt-8">
                Learn More About Investor Services
              </CtaButton>
            </div>
          </Container>
        </div>
      </section>

      {/* Property improvements (not shown in the mockup; follows the same pattern) */}
      <section id="property-improvements" className=" bg-white">
        <div className="grid lg:grid-cols-2">
          <Container className="py-14 sm:py-16 lg:py-20 lg:mr-0 lg:max-w-[620px] lg:py-20 lg:pr-12">
            <div data-reveal>
              <Eyebrow>Property Improvements</Eyebrow>
              <Heading className="mt-3 text-navy-900">Property Projects & Renovation Oversight.</Heading>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                Value-driven renovations and ongoing maintenance to keep your property competitive and increase
                long-term value. We provide end-to-end project management to enhance value, control costs, and
                maximize returns.
              </p>
              <CtaButton className="mt-8">Request a Project Consultation</CtaButton>
            </div>
          </Container>
          <div data-reveal className="relative min-h-[320px] sm:min-h-[400px]">
            <Image src="/img/svc-projects.jpg" alt="Renovated modern kitchen" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
