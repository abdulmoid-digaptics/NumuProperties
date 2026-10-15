import type { Metadata } from "next";
import Image from "next/image";
import {
  ChartColumnIncreasing,
  FileSearch,
  FileText,
  Handshake,
  MessagesSquare,
  Settings,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import {
  CheckList,
  Container,
  Eyebrow,
  FeatureTile,
  Gold,
  Heading,
  HeroActions,
  HeroLead,
  PageHero,
  Section,
  Steps,
  Testimonial,
} from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "For Property Owners",
  description: "Protect your investment, increase returns, and enjoy a truly hands-off ownership experience.",
};

const benefits = [
  { icon: ChartColumnIncreasing, title: "Higher Returns", text: "Optimize rental income and reduce vacancies." },
  { icon: ShieldCheck, title: "Property Protection", text: "Proactive maintenance and tenant screening." },
  { icon: Users, title: "Lower Stress", text: "We handle day-to-day operations so you don’t have to." },
  { icon: FileText, title: "Transparent Reporting", text: "Clear financials and real-time updates." },
  { icon: Settings, title: "Experienced Team", text: "Local expertise and dedicated support." },
  { icon: TrendingUp, title: "Long-Term Value", text: "Strategic planning to grow your investment." },
];

const steps = [
  { icon: MessagesSquare, title: "Initial Consultation", text: "We understand your goals and review your property." },
  { icon: FileSearch, title: "Property Evaluation", text: "Market analysis and custom management plan." },
  { icon: Handshake, title: "Onboarding", text: "Seamless transition and tenant communication." },
  { icon: Settings, title: "Ongoing Management", text: "Leasing, maintenance, financials, and support." },
  { icon: ChartColumnIncreasing, title: "Review & Growth", text: "Regular reporting and strategic recommendations to increase value." },
];

const types = [
  { image: "/img/owners-type-multi.jpg", title: "Multifamily Residential", text: "Apartments and multi-unit properties." },
  { image: "/img/owners-type-single.jpg", title: "Single-Family Rentals", text: "Houses, townhomes, and portfolios." },
  { image: "/img/owners-type-mixed.jpg", title: "Mixed-Use Properties", text: "Residential, retail, and office spaces." },
  { image: "/img/owners-type-specialty.jpg", title: "Specialty Properties", text: "Short-term rentals, co-living, and more." },
];

export default function OwnersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Property Owners"
        image="/img/owners-hero.jpg"
        imageAlt="Contemporary apartment building with lit balconies at sunset"
        title={
          <>
            Maximize the Potential of <Gold>Your Property.</Gold>
          </>
        }
      >
        <HeroLead>
          We help property owners protect their investment, increase returns, and enjoy a truly hands-off ownership
          experience. From tenant leasing to maintenance and financial reporting, NUMU Property Management takes care
          of everything.
        </HeroLead>
        <HeroActions>
          <CtaButton>Get a Free Property Assessment</CtaButton>
          <CtaButton href="/contact" variant="outline" arrow={false}>
            Speak with Our Team
          </CtaButton>
        </HeroActions>
      </PageHero>

      {/* Owner benefits */}
      <Section tone="cream">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <Eyebrow line>Owner Benefits</Eyebrow>
            <Heading className="mt-3 text-navy-900">A Higher Standard of Property Management.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              We combine local market expertise, technology, and a personalized approach to deliver better results for
              property owners across residential and mixed-use assets.
            </p>
            <div className="relative mt-8 aspect-[463/150] overflow-hidden rounded-xl">
              <Image src="/img/owners-living.jpg" alt="Bright living room with city views" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ul data-stagger className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className={cn(
                  "border-black/10 px-3 py-6",
                  "min-[420px]:border-b sm:[&:nth-child(n+4)]:border-b-0",
                  i % 3 !== 0 && "sm:border-l"
                )}
              >
                <FeatureTile icon={b.icon} title={b.title} text={b.text} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Approach */}
      <section className="bg-navy-900 py-14 text-white sm:py-16 lg:py-20">
        <Container>
          <div data-reveal className="grid gap-4 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Our Approach</Eyebrow>
              <Heading className="mt-3 text-white">A Simple, Proven Process.</Heading>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/80 lg:justify-self-end">
              From onboarding to ongoing management, we make the process straightforward and transparent.
            </p>
          </div>
          <Steps dark steps={steps} className="mt-12" />
        </Container>
      </section>

      {/* Property types */}
      <Section tone="cream">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>Property Types We Manage</Eyebrow>
            <Heading className="mt-3 text-navy-900">Tailored Solutions for Every Property.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              We work with individual owners, family offices, and investors to manage a wide range of property types.
            </p>
            <CtaButton href="/services" className="mt-8">
              See Our Services
            </CtaButton>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-5 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {types.map((t) => (
              <li key={t.title} className="group">
                <div className="relative aspect-[146/125] overflow-hidden rounded-lg">
                  <Image src={t.image} alt={t.title} fill sizes="(min-width: 1024px) 18vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-3 font-serif text-[15px] font-semibold text-navy-900">{t.title}</h3>
                <p className="mt-1 text-[13px] text-slate-600">{t.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Testimonial + why owners choose */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
          <Testimonial
            image="/img/owners-testimonial.jpg"
            quote="NUMU has been an exceptional partner. They increased our occupancy, streamlined operations, and provide clear reporting that gives us confidence in our investment."
            name="Property Owner"
            location="Oakbrook Terrace, IL"
          />
          <div data-reveal className="grid gap-6 sm:grid-cols-[3fr_2fr] sm:items-center">
            <div>
              <Eyebrow>Why Owners Choose NUMU</Eyebrow>
              <Heading className="mt-3 text-navy-900">Your Investment. Our Commitment.</Heading>
              <CheckList
                variant="square"
                className="mt-5 [&_li]:text-[13px]"
                items={[
                  "Local market expertise",
                  "Proactive property care",
                  "Technology-enabled management",
                  "Transparent financial reporting",
                  "Dedicated owner support",
                  "Focus on long-term value",
                ]}
              />
            </div>
            <div className="relative aspect-[174/201] overflow-hidden rounded-xl">
              <Image src="/img/owners-dining.jpg" alt="Modern dining room and kitchen" fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
