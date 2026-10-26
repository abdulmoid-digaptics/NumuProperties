import Image from "next/image";
import {
  ChartColumnIncreasing,
  ChartNoAxesColumnIncreasing,
  Coins,
  FileText,
  Hammer,
  House,
  Settings,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Wrench,
} from "lucide-react";
import { CtaButton } from "@/components/site/cta-button";
import {
  ArrowLink,
  Container,
  Eyebrow,
  Gold,
  Heading,
  HeroActions,
  HeroLead,
  PageHero,
  Section,
} from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const pillars = [
  { icon: ChartNoAxesColumnIncreasing, label: ["Stewardship", "Over Everything"] },
  { icon: ShieldCheck, label: ["Transparent", "Reporting"] },
  { icon: Settings, label: ["Simpler", "Ownership"] },
  { icon: TrendingUp, label: ["Growth", "Focused"] },
];

const highlights = [
  { icon: FileText, title: "Transparent Reporting", text: "Real-time insights, clear financials, no surprises." },
  { icon: Wrench, title: "Proactive Maintenance", text: "Protecting your asset and tenants’ experience." },
  { icon: Users, title: "Exceptional Tenant Experience", text: "Happier tenants, longer stays, better returns." },
  { icon: ChartColumnIncreasing, title: "National Growth Strategy", text: "A scalable platform for long-term success." },
];

const services = [
  {
    image: "/img/svc-management.jpg",
    icon: House,
    title: "Property Management",
    text: "Full-service management for single family, multifamily, and commercial properties. We handle the details, you enjoy the results.",
    href: "/services#property-management",
  },
  {
    image: "/img/svc-investor.jpg",
    icon: ChartNoAxesColumnIncreasing,
    title: "Investor Services",
    text: "Detailed reporting, portfolio performance insights, and strategic guidance for individual and institutional investors.",
    href: "/investors",
  },
  {
    image: "/img/svc-projects.jpg",
    icon: Hammer,
    title: "Property Projects & Renovation Oversight",
    text: "End-to-end project management to enhance value, control costs, and maximize returns.",
    href: "/services#property-improvements",
  },
];

const reasons = [
  { icon: ShieldCheck, title: "Straightforward Service", text: "Clear communication and no hidden fees." },
  { icon: Settings, title: "Tech-Enabled Operations", text: "Modern tools for modern owners." },
  { icon: Coins, title: "Asset Protection", text: "Proactive care to preserve value." },
  { icon: ChartColumnIncreasing, title: "Portfolio Growth", text: "Strategic guidance for long-term success." },
  { icon: Users, title: "Premium Communication", text: "Responsive, informed, and invested in your goals." },
];

const process = [
  { icon: Users, title: "Onboard", text: "We learn your goals and build a custom plan." },
  { icon: Settings, title: "Optimize", text: "We streamline operations and implement technology." },
  { icon: House, title: "Manage", text: "We handle day-to-day property care with excellence." },
  { icon: ChartColumnIncreasing, title: "Grow", text: "You benefit from increased value and long-term returns." },
];

const propertyTypes = [
  { image: "/img/type-single.jpg", label: "Single Family" },
  { image: "/img/type-multi.jpg", label: "Multifamily" },
  { image: "/img/type-commercial.jpg", label: "Commercial" },
  { image: "/img/type-portfolio.jpg", label: "Portfolio Investors" },
];

const testimonials = [
  {
    avatar: "/img/avatar-michael.jpg",
    quote: "NUMU has transformed our rental experience. Their communication, reporting, and attention to detail are unmatched.",
    name: "Michael R.",
    role: "Property Owner",
  },
  {
    avatar: "/img/avatar-jennifer.jpg",
    quote: "The investor reporting is best-in-class. I have full visibility and confidence in my portfolio performance.",
    name: "Jennifer L.",
    role: "Real Estate Investor",
  },
  {
    avatar: "/img/avatar-david.jpg",
    quote: "The NUMU team executed our renovation project seamlessly and increased our property value significantly.",
    name: "David K.",
    role: "Multifamily Owner",
  },
];

export default function HomePage() {
  return (
    <>
      <PageHero
        eyebrow="People. Property. Long-term value."
        image="/img/home-hero.jpg"
        imageAlt="Modern luxury residence lit at dusk against a city skyline"
        footnote={["National reach.", "Local execution."]}
        title={
          <>
            Technology-Enabled Property Management <Gold>for Modern Owners</Gold>
          </>
        }
      >
        <HeroLead>
          Complete property care, transparent reporting, investor services, and project oversight — built for lasting
          value.
        </HeroLead>
        <HeroActions>
          <CtaButton>Get a Management Proposal</CtaButton>
          <CtaButton href="/services" variant="outline" arrow={false}>
            Explore Services
          </CtaButton>
        </HeroActions>
        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-4 sm:gap-6">
          {pillars.map((p) => (
            <li key={p.label[0]} className="flex items-center gap-2.5 text-xs leading-tight text-white/85">
              <p.icon className="size-6 shrink-0 text-gold-400" strokeWidth={1.5} />
              <span>
                {p.label[0]}
                <br />
                {p.label[1]}
              </span>
            </li>
          ))}
        </ul>
      </PageHero>

      {/* Highlights strip */}
      <section className="border-b border-black/5 bg-white">
        <Container>
          <ul data-stagger className="grid grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <li
                key={h.title}
                className={cn(
                  "flex items-start gap-4 py-6 lg:px-6",
                  i > 0 && "lg:border-l lg:border-black/10",
                  "min-[520px]:odd:pr-6 min-[520px]:even:pl-6 lg:odd:pr-6 lg:even:pl-6 lg:first:pl-0"
                )}
              >
                <h.icon className="mt-0.5 size-8 shrink-0 text-gold-500" strokeWidth={1.4} />
                <div>
                  <h3 className="font-sans text-sm font-semibold text-navy-900">{h.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Services */}
      <Section tone="cream">
        <Container>
          <div data-reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Our Services</Eyebrow>
              <Heading className="mt-3 text-navy-900">Complete Property Solutions</Heading>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-slate-600 sm:text-[15px] lg:justify-self-end">
              Three integrated service divisions. One seamless owner experience. Built on stewardship, transparency,
              simplicity, and growth.
            </p>
          </div>
          <div data-stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_14px_40px_-24px_rgba(11,28,51,0.45)] transition-transform duration-300 hover:-translate-y-1 sm:last:col-span-2 lg:last:col-span-1"
              >
                <div className="relative h-44 overflow-hidden sm:h-48">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 gap-4 p-5 sm:p-6">
                  <s.icon className="size-8 shrink-0 text-gold-500" strokeWidth={1.4} />
                  <div className="flex flex-1 flex-col">
                    <h3 className="font-sans text-base font-semibold text-navy-900">{s.title}</h3>
                    <p className="mt-2 flex-1 text-[13px] leading-relaxed text-slate-600">{s.text}</p>
                    <ArrowLink href={s.href} className="mt-4">
                      Learn More
                    </ArrowLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* Owner dashboard */}
      <section className="relative overflow-hidden bg-navy-900 py-14 text-white sm:py-16 lg:py-20">
        <div aria-hidden className="absolute inset-y-0 right-0 w-2/3 bg-[radial-gradient(ellipse_at_center,rgba(53,162,131,0.12),transparent_65%)]" />
        <Container className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-reveal>
            <Eyebrow>Technology-Enabled</Eyebrow>
            <Heading className="mt-3 text-white">Owner Dashboard</Heading>
            <p className="mt-2 font-serif text-[clamp(1.15rem,2vw,1.5rem)] text-gold-400">
              Real-Time Insights. Total Confidence.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-[15px]">
              Our digital platform gives owners and investors real-time access to financials, performance metrics,
              maintenance updates, and more — anytime, anywhere.
            </p>
            <CtaButton href="/owners" className="mt-8">
              See the Owner Experience
            </CtaButton>
          </div>
          <div
            data-reveal
            className="relative aspect-[2024/801] w-full [mask-image:radial-gradient(ellipse_75%_80%_at_center,black_70%,transparent_100%)]"
          >
            <Image
              src="/img/dashboard.jpg"
              alt="NUMU owner dashboard on a laptop and phone showing portfolio overview, rent collection and property mix"
              fill
             
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-contain"
            />
          </div>
        </Container>
      </section>

      {/* Why NUMU */}
      <Section tone="white" className="py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>Why NUMU</Eyebrow>
            <Heading className="mt-3 text-navy-900">
              More Than Management. A Better Ownership Experience.
            </Heading>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-6 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
            {reasons.map((r) => (
              <li key={r.title} className="lg:border-l lg:border-black/10 lg:px-5">
                <r.icon className="size-7 text-gold-500" strokeWidth={1.4} />
                <h3 className="mt-3 font-sans text-[13px] font-semibold text-navy-900">{r.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{r.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* How it works */}
      <section className="bg-navy-900 py-12 text-white sm:py-14">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>How It Works</Eyebrow>
            <Heading className="mt-3 text-white">
              A Simple Process for Powerful Results.
            </Heading>
          </div>
          <ol data-stagger className="grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map((p, i) => (
              <li key={p.title} className="relative flex gap-3">
                <span className="mt-1 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-white/40 text-xs font-semibold">
                  {i + 1}
                </span>
                <div>
                  <p.icon className="size-7 text-gold-400" strokeWidth={1.4} />
                  <h3 className="mt-2 font-sans text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/75">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Property types */}
      <Section tone="white" className="py-12 sm:py-14 lg:py-16">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:items-center xl:gap-12">
          <div data-reveal>
            <Eyebrow>Property Types We Serve</Eyebrow>
            <Heading className="mt-3 text-navy-900">
              Across Asset Classes. Built for Scale.
            </Heading>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-x-5 gap-y-6 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((t) => (
              <li key={t.label} className="group min-w-0 text-center">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={t.image}
                    alt={t.label}
                    fill
                   
                    sizes="(min-width: 1240px) 197px, (min-width: 1024px) calc((100vw - 436px) / 4), (min-width: 640px) calc((100vw - 68px) / 2), (min-width: 420px) calc((100vw - 52px) / 2), calc(100vw - 32px)"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-sm leading-snug font-semibold text-navy-900">{t.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* National brand / Markets */}
      <section id="markets" className=" bg-navy-900 py-14 text-white sm:py-16">
        <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr_0.9fr]">
          <div data-reveal>
            <Heading className="text-white">A National Brand with Local Execution.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              NUMU is built for national growth with on-the-ground expertise. We combine a scalable platform with local
              market knowledge to deliver exceptional results across the country.
            </p>
          </div>
          <div data-reveal className="relative aspect-[1324/493] w-full">
            <Image
              src="/img/us-map.jpg"
              alt="Map of the United States with NUMU markets highlighted"
              fill
             
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-contain"
            />
          </div>
          <div data-reveal>
            <Eyebrow>National Coverage</Eyebrow>
            <p className="mt-2 font-serif text-xl leading-snug sm:text-2xl">
              Growing Markets
              <br />
              Stronger Communities
            </p>
            <dl className="mt-6 flex gap-8">
              <div>
                <dt className="sr-only">Markets</dt>
                <dd className="font-serif text-3xl text-gold-400" data-count="50" data-suffix="+">
                  50+
                </dd>
                <dd className="mt-1 text-xs text-white/75">Markets and Growing</dd>
              </div>
              <div className="border-l border-white/20 pl-8">
                <dt className="sr-only">Support</dt>
                <dd className="font-serif text-3xl text-gold-400">24/7</dd>
                <dd className="mt-1 text-xs text-white/75">Owner Support</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <Section tone="white" className="py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>What Our Clients Say</Eyebrow>
            <Heading className="mt-3 text-navy-900">
              Trusted by Owners. Proven by Results.
            </Heading>
          </div>
          <ul data-stagger className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name} className="flex gap-4 rounded-xl border border-black/5 bg-cream p-5">
                <Image src={t.avatar} alt={t.name} width={48} height={48} className="size-12 shrink-0 rounded-full object-cover" />
                <figure>
                  <div className="flex gap-0.5 text-gold-500" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-2 text-[13px] leading-relaxed text-slate-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-3 text-xs">
                    <span className="block font-semibold text-navy-900">{t.name}</span>
                    <span className="text-slate-500">{t.role}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
