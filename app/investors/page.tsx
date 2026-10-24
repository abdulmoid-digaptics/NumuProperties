import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ChartColumnIncreasing,
  ChevronRight,
  FileText,
  House,
  MapPin,
  Play,
  Search,
  Settings,
  ShieldCheck,
  Sofa,
  Store,
  Users,
} from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import {
  Container,
  Eyebrow,
  FeatureTile,
  Gold,
  Heading,
  HeroActions,
  HeroLead,
  HeroPanel,
  IconRing,
  PageHero,
  Section,
  Testimonial,
} from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Investor Services"
};

const paths = [
  { image: "/img/inv-str.jpg", icon: House, title: "Short Term Rental Investments", text: "High-return vacation and short-term rentals with full management support.", href: "/short-term-rentals" },
  { image: "/img/inv-ltr.jpg", icon: House, title: "Long Term Rental Investments", text: "Stable income through residential properties.", href: "/owners" },
  { image: "/img/inv-multi.jpg", icon: Building2, title: "Multifamily Investments", text: "Scalable opportunities in high-demand markets.", href: "/contact" },
  { image: "/img/inv-commercial.jpg", icon: Store, title: "Commercial Properties", text: "Retail, office, and mixed-use investments.", href: "/contact" },
  { image: "/img/inv-land.jpg", icon: MapPin, title: "Land & Development Opportunities", text: "Strategic land investments and development projects.", href: "/contact" },
];

const strFeatures = [
  { icon: Search, title: "Market Analysis", text: "Identify high-demand locations and properties." },
  { icon: House, title: "Property Acquisition", text: "Guidance on purchasing the right property." },
  { icon: Sofa, title: "Design & Furnishing", text: "Guest-ready setup that stands out." },
  { icon: Settings, title: "Full Management", text: "Listing, guest communication, cleaning, and maintenance." },
  { icon: ChartColumnIncreasing, title: "Maximized Returns", text: "Data-driven pricing and ongoing optimization." },
];

const reasons = [
  { icon: ChartColumnIncreasing, title: "Local Market Expertise", text: "In-depth knowledge of Chicago and beyond." },
  { icon: Users, title: "End-to-End Support", text: "From acquisition to ongoing management." },
  { icon: ShieldCheck, title: "Transparent Reporting", text: "Clear financials and real-time updates." },
  { icon: Settings, title: "Proven Track Record", text: "Higher occupancy and strong returns." },
];

const resources = ["Market Insights & Reports", "STR Investment Guide", "Case Studies", "Tax & Legal Resources", "Frequently Asked Questions"];

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Services"
        image="/img/inv-hero.jpg"
        imageAlt="Rooftop terrace with fire pit overlooking a city skyline at sunset"
        title={
          <>
            Build Wealth Through <Gold>Strategic Real Estate.</Gold>
          </>
        }
        aside={
          <HeroPanel
            items={[
              { icon: ChartColumnIncreasing, title: "Higher Returns", text: "Data-driven investment strategies" },
              { icon: ShieldCheck, title: "Hands-Off Management", text: "We handle the details" },
              { icon: Users, title: "Trusted Partner", text: "Local expertise and proven results" },
            ]}
          />
        }
      >
        <HeroLead>
          We help investors identify, acquire, and manage high-performing real estate opportunities. From short term
          rentals to long-term holdings, NUMU provides end-to-end support to maximize returns and minimize hassle.
        </HeroLead>
        <HeroActions>
          <CtaButton href="#investment-paths">Explore Investment Opportunities</CtaButton>
          <CtaButton href="/contact" variant="outline" arrow={false}>
            Speak with Our Team
          </CtaButton>
        </HeroActions>
      </PageHero>

      {/* Investment paths */}
      <Section tone="cream" id="investment-paths" className="">
        <Container>
          <div data-reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow line>Our Investment Services</Eyebrow>
              <Heading className="mt-3 text-navy-900">Multiple Paths to Build Your Portfolio.</Heading>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Whether you’re looking for short term rental properties, long-term investments, or value-add
              opportunities, we provide the guidance, management, and support to help you achieve your financial goals.
            </p>
          </div>
          <ul data-stagger className="mt-10 grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {paths.map((p, i) => (
              <li key={p.title}>
                <Link
                  href={p.href}
                  className={cn(
                    "group flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-[0_14px_40px_-24px_rgba(11,28,51,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-gold-400",
                    i === 0 ? "border-gold-400" : "border-black/5"
                  )}
                >
                  <div className="relative h-36 overflow-hidden">
                    <Image src={p.image} alt="" fill sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, (min-width: 480px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="relative flex flex-1 flex-col p-5">
                    <span className="absolute -top-5 left-5 inline-flex size-10 items-center justify-center rounded-full bg-gold-400 text-navy-900 shadow">
                      <p.icon className="size-[18px]" strokeWidth={1.7} />
                    </span>
                    <h3 className="mt-4 font-serif text-lg leading-snug font-semibold text-navy-900">{p.title}</h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{p.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-gold-600">
                      Learn More <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Featured STR */}
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 -z-10 md:left-[40%]">
          <Image src="/img/inv-featured.jpg" alt="" fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy-900/75 md:bg-transparent md:bg-gradient-to-r md:from-navy-900 md:via-navy-900/40 md:to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900 to-transparent" />
        </div>
        <Container className="py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
            <div data-reveal className="max-w-xl">
              <Eyebrow>Featured Investment Service</Eyebrow>
              <Heading className="mt-3 text-white">Short Term Rental Investments</Heading>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-[15px]">
                We help investors find, acquire, and manage high-performing short term rental (STR) properties. From
                market analysis and property setup to guest management and ongoing operations, we handle everything so
                you can enjoy the returns.
              </p>
              <CtaButton href="/short-term-rentals" className="mt-8">
                Explore STR Investment Opportunities
              </CtaButton>
            </div>
            <Link href="/short-term-rentals#how-it-works" data-reveal className="group flex items-center gap-4 justify-self-start md:justify-self-center">
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-white text-navy-900 shadow-xl transition-transform group-hover:scale-105">
                <Play className="ml-1 size-6 fill-current" />
              </span>
              <span className="text-sm">
                <span className="block font-semibold">See How It Works</span>
                <span className="text-white/75">2 Min Video</span>
              </span>
            </Link>
          </div>
          <ul data-stagger className="mt-12 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 xl:gap-0">
            {strFeatures.map((f, i) => (
              <li key={f.title} className={cn("flex items-start gap-3 xl:px-4", i > 0 && "xl:border-l xl:border-white/15")}>
                <IconRing icon={f.icon} className="border-gold-400/80 text-gold-400" />
                <span>
                  <span className="block text-[13px] font-semibold">{f.title}</span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/75">{f.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why investors */}
      <Section tone="cream" className="py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow line>Why Investors Choose NUMU</Eyebrow>
            <Heading className="mt-3 text-navy-900">A Partner Focused on Your Success.</Heading>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-8 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <li key={r.title}>
                <FeatureTile icon={r.icon} title={r.title} text={r.text} />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Testimonial, resources, advisor */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_1fr]">
          <Testimonial
            className="md:col-span-2 lg:col-span-1"
            image="/img/inv-testimonial.jpg"
            quote="NUMU made the entire STR investment process simple and stress-free. Their team handles everything and delivers consistent returns."
            name="Investor"
            location="Chicago, IL"
          />
          <div data-reveal className="rounded-xl border border-black/5 bg-cream p-6">
            <Eyebrow>Investor Resources</Eyebrow>
            <ul className="mt-4 divide-y divide-black/5">
              {resources.map((r) => (
                <li key={r}>
                  <Link href="/contact" className="group flex items-center gap-3 py-2.5 text-[13px] text-ink hover:text-gold-600">
                    <FileText className="size-4 shrink-0 text-gold-500" strokeWidth={1.6} />
                    <span className="flex-1">{r}</span>
                    <ChevronRight className="size-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="grid grid-cols-[88px_minmax(0,1fr)] items-center gap-4 rounded-xl border border-black/5 bg-cream p-4 min-[400px]:grid-cols-[110px_minmax(0,1fr)] sm:gap-5 sm:p-5 sm:grid-cols-[130px_minmax(0,1fr)]">
            <div className="relative aspect-[82/142] overflow-hidden rounded-lg">
              <Image src="/img/inv-advisor.jpg" alt="NUMU investment advisor" fill sizes="130px" className="object-cover" />
            </div>
            <div>
              <h3 className="font-serif text-xl leading-snug text-navy-900">Ready to Explore Opportunities?</h3>
              <p className="mt-2 text-[13px] text-slate-600">Schedule a free consultation with our investment team.</p>
              <CtaButton href="/contact" className="mt-4">
                Get in Touch
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
