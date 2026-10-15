import type { Metadata } from "next";
import Image from "next/image";
import {
  CalendarCheck,
  ChartColumnIncreasing,
  ChartPie,
  FileText,
  House,
  Megaphone,
  Search,
  Settings,
  ShieldCheck,
  Sofa,
  Sparkles,
  Users,
  Wrench,
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
  ImageCard,
  PageHero,
  Section,
  Testimonial,
} from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Short Term Rental Investments & Management",
  description: "Turn exceptional properties into exceptional returns with NUMU short term rental management.",
};

const benefits = [
  { icon: ChartColumnIncreasing, title: "Maximize Rental Income" },
  { icon: ShieldCheck, title: "Professional Management" },
  { icon: Settings, title: "End-to-End Support" },
  { icon: Users, title: "Guest Experience Excellence" },
  { icon: House, title: "Compliance & Local Expertise" },
];

const steps = [
  { icon: Search, title: "Consultation", text: "Understand your goals and evaluate opportunities." },
  { icon: House, title: "Property Setup", text: "Design, furnish, and list your property for success." },
  { icon: Settings, title: "Ongoing Management", text: "We handle bookings, guests, maintenance, and more." },
  { icon: ChartColumnIncreasing, title: "Review & Grow", text: "Regular reporting and strategies to increase returns." },
];

const services = [
  { icon: ChartColumnIncreasing, title: "Market Analysis", text: "Identify the best opportunities in top markets." },
  { icon: Sofa, title: "Design & Furnishing", text: "Guest-ready setups that stand out." },
  { icon: Megaphone, title: "Listing & Marketing", text: "Optimized listings across Airbnb, Vrbo, and more." },
  { icon: CalendarCheck, title: "Booking Management", text: "24/7 guest communication and support." },
  { icon: Sparkles, title: "Cleaning & Turnover", text: "Professional cleaning and inspections." },
  { icon: Wrench, title: "Maintenance & Repairs", text: "Keep your property in excellent condition." },
  { icon: FileText, title: "Compliance Support", text: "Local regulations, permits, and tax guidance." },
  { icon: ChartPie, title: "Financial Reporting", text: "Transparent reports on performance and income." },
];

export default function ShortTermRentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Short Term Rental"
        image="/img/str-hero.jpg"
        imageAlt="Luxury home with pool and outdoor lounge at sunset"
        title={
          <>
            Investments & <Gold>Management</Gold>
          </>
        }
      >
        <p className="mt-5 text-base font-semibold text-white sm:text-lg">Turn exceptional properties into exceptional returns.</p>
        <HeroLead className="mt-3">
          We help property owners invest in, set up, and manage short term rentals (STRs) with a focus on performance,
          compliance, and a seamless guest experience.
        </HeroLead>
        <HeroActions>
          <CtaButton href="#str-services">Explore Our STR Services</CtaButton>
          <CtaButton href="/contact" variant="outline" arrow={false}>
            Talk to Our Team
          </CtaButton>
        </HeroActions>
      </PageHero>

      {/* Benefits strip */}
      <section className="border-b border-black/5 bg-white">
        <Container>
          <ul data-stagger className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {benefits.map((b, i) => (
              <li key={b.title} className={cn("flex flex-col items-center px-3 py-8 text-center", i > 0 && "lg:border-l lg:border-black/10")}>
                <b.icon className="size-9 text-gold-500" strokeWidth={1.3} />
                <h3 className="mt-3 max-w-[150px] font-serif text-[15px] leading-snug font-semibold text-navy-900">{b.title}</h3>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Complete solution */}
      <Section tone="cream">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <span aria-hidden className="block h-px w-8 bg-gold-500/70" />
            <Heading className="mt-3 text-navy-900">
              A Complete Solution for <span className="text-gold-500">Short Term Rentals.</span>
            </Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              From investment guidance to day-to-day management, we handle every detail so you can enjoy the benefits
              of short term rentals without the hassle.
            </p>
            <CtaButton href="#str-services" className="mt-8">
              Our STR Management Services
            </CtaButton>
          </div>
          <div data-stagger className="grid gap-5 sm:grid-cols-3">
            <ImageCard image="/img/str-acquisition.jpg" title="Property Acquisition & Setup" text="Guidance on the right properties, design, and amenities to attract guests." />
            <ImageCard image="/img/str-management.jpg" title="Professional Management" text="Listing, pricing, guest communication, and full operations." />
            <ImageCard image="/img/str-returns.jpg" title="Higher Returns" text="Data-driven pricing and marketing to maximize occupancy and revenue." />
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <section id="how-it-works" className="relative isolate overflow-hidden bg-navy-900 py-14 text-white sm:py-16 lg:py-20">
        <div className="absolute inset-0 -z-10">
          <Image src="/img/inv-testimonial.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900/70" />
        </div>
        <Container className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>How It Works</Eyebrow>
            <Heading className="mt-3 text-white">From Investment to Income — We Handle It All.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Whether you’re new to short term rentals or looking to optimize an existing property, we provide a clear,
              proven process.
            </p>
            <CtaButton className="mt-8">Get Started Today</CtaButton>
          </div>
          <ol data-stagger className="relative grid grid-cols-1 gap-10 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            <span aria-hidden className="absolute top-3 right-[12%] left-[12%] hidden h-px bg-gold-400/40 lg:block" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 inline-flex size-6 items-center justify-center rounded-full bg-gold-400 text-[11px] font-bold text-navy-900">
                  {i + 1}
                </span>
                <span className="mt-4 inline-flex size-14 items-center justify-center rounded-full border border-gold-400/80 text-gold-400">
                  <s.icon className="size-6" strokeWidth={1.4} />
                </span>
                <h3 className="mt-3 font-serif text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 max-w-[190px] text-[13px] leading-relaxed text-white/75">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Services */}
      <Section tone="cream" id="str-services" className="">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow line>Our Services</Eyebrow>
            <Heading className="mt-3 text-navy-900">Everything You Need for STR Success.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Comprehensive services tailored to property owners and investors.
            </p>
            <CtaButton className="mt-8">Discuss STR Services</CtaButton>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <li key={s.title}>
                <FeatureTile boxed icon={s.icon} title={s.title} text={s.text} className="h-full [&>span:first-child]:size-auto [&>span:first-child]:border-0" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Testimonial + why */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-stretch">
          <Testimonial
            image="/img/str-testimonial.jpg"
            quote="NUMU has been an incredible partner in managing our short term rental. Their team handles everything, and our property performs better than we ever expected."
            name="Property Owner"
            location="Oakbrook Terrace, IL"
          />
          <div data-reveal className="grid gap-6 sm:grid-cols-[3fr_2fr] sm:items-center">
            <div>
              <Eyebrow>Why Choose NUMU?</Eyebrow>
              <Heading className="mt-3 text-navy-900">Your STR Partner for Long-Term Success.</Heading>
              <CheckList
                variant="square"
                className="mt-5 [&_li]:text-[13px]"
                items={[
                  "Local market expertise",
                  "Hands-free management",
                  "Proven track record of higher returns",
                  "Guest satisfaction focus",
                  "Transparent communication",
                  "Compliance and risk management",
                ]}
              />
            </div>
            <div className="relative aspect-[174/242] overflow-hidden rounded-xl">
              <Image src="/img/str-family.jpg" alt="Family arriving at their vacation rental with luggage" fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
