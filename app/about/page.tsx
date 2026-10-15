import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  ChartColumnIncreasing,
  Handshake,
  House,
  Landmark,
  Leaf,
  Settings,
  ShieldCheck,
  Store,
  Target,
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
  PageHero,
  Section,
} from "@/components/site/primitives";
import { team } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: "NUMU partners with investors to acquire, manage, and grow high-performing real estate assets.",
};

const stats = [
  { count: "100", suffix: "+", label: "Units Under Management", sub: "And Growing" },
  { count: "50", prefix: "$", suffix: "M+", label: "Total Asset Value", sub: "Across Markets" },
  { display: "8–12%", label: "Target Annual Returns", sub: "(Typical Range)" },
  { count: "100", suffix: "%", label: "Alignment of Interests", sub: "Investor-Focused Approach" },
];

const philosophy = [
  { icon: Target, title: "Strategic Acquisition", text: "Focus on markets with strong growth fundamentals." },
  { icon: Settings, title: "Operational Excellence", text: "Professional management to maximize performance." },
  { icon: ChartColumnIncreasing, title: "Data-Driven Decisions", text: "Market analysis and financial modeling guide every investment." },
  { icon: ShieldCheck, title: "Risk Management", text: "Disciplined underwriting and ongoing monitoring." },
  { icon: Users, title: "Aligned Interests", text: "We invest alongside our partners." },
  { icon: Leaf, title: "Sustainable Growth", text: "Creating long-term value, not just short-term gains." },
];

const opportunities = [
  { icon: Building2, label: "Multifamily Residential" },
  { icon: House, label: "Single-Family Rental Portfolios" },
  { icon: Store, label: "Mixed-Use Properties" },
  { icon: Handshake, label: "Strategic Partnerships" },
];

function LinkedInBadge({ name }: { name: string }) {
  return (
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noreferrer"
      aria-label={`${name} on LinkedIn`}
      className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-gold-500 text-white transition-colors hover:bg-gold-600"
    >
      <svg viewBox="0 0 24 24" className="size-3.5" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.06c.53-1 1.84-2.06 3.78-2.06 4.05 0 4.8 2.66 4.8 6.13V21h-4v-5.05c0-1.2-.02-2.76-1.68-2.76-1.69 0-1.95 1.32-1.95 2.67V21h-4V9.75Z" />
      </svg>
    </a>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About NUMU"
        image="/img/about-hero.jpg"
        imageAlt="Modern residential tower with warm interior lights at dusk"
        title={
          <>
            Partner in Real Estate. <Gold>Build What’s Next.</Gold>
          </>
        }
        aside={
          <HeroPanel
            items={[
              { icon: Landmark, title: "Institutional Discipline" },
              { icon: Users, title: "Hands-On Management" },
              { icon: ChartColumnIncreasing, title: "Transparent Reporting" },
              { icon: ShieldCheck, title: "Long-Term Value Creation" },
            ]}
          />
        }
      >
        <HeroLead>
          NUMU Property Management partners with investors to acquire, manage, and grow high-performing real estate
          assets through a disciplined, data-driven, and hands-on approach.
        </HeroLead>
        <HeroActions>
          <CtaButton href="/contact">Partner With Us</CtaButton>
        </HeroActions>
      </PageHero>

      {/* Stats */}
      <section className="bg-cream">
        <Container>
          <dl data-stagger className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  "flex flex-col items-center px-4 py-8 text-center sm:py-10",
                  i % 2 === 1 && "min-[420px]:border-l min-[420px]:border-black/10",
                  i > 0 && "lg:border-l lg:border-black/10"
                )}
              >
                <dd
                  className="order-first font-serif text-[clamp(2rem,3.5vw,2.6rem)] leading-none text-navy-900"
                  {...(s.count ? { "data-count": s.count, "data-prefix": s.prefix ?? "", "data-suffix": s.suffix } : {})}
                >
                  {s.count ? `${s.prefix ?? ""}${s.count}${s.suffix}` : s.display}
                </dd>
                <dt className="mt-3 text-[13px] font-semibold text-navy-900">{s.label}</dt>
                <dd className="mt-1 text-xs text-slate-500">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Investment philosophy */}
      <Section tone="white">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-reveal>
            <Eyebrow>Our Investment Philosophy</Eyebrow>
            <Heading className="mt-3 text-navy-900">
              Disciplined Investment.
              <br />
              Proactive Management.
              <br />
              Stronger Returns.
            </Heading>
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              We believe real estate investing is about more than just acquiring properties — it’s about strategic
              selection, operational excellence, and long-term stewardship. NUMU provides investors with access to
              high-quality opportunities, professional management, and transparent, technology-enabled reporting.
            </p>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3">
            {philosophy.map((p) => (
              <li key={p.title}>
                <FeatureTile boxed icon={p.icon} title={p.title} text={p.text} className="h-full" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Leadership */}
      <Section tone="sand">
        <Container>
          <div data-reveal className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <Eyebrow>Our Leadership Team</Eyebrow>
              <Heading className="mt-3 text-navy-900">Experienced Professionals. Aligned for Your Success.</Heading>
            </div>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Our team combines real estate expertise, operational excellence, financial insight, and strategic
              partnerships to deliver strong results for our investors.
            </p>
          </div>
          <ul data-stagger className="mt-10 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <li key={m.name}>
                <div className="relative aspect-[217/165] overflow-hidden rounded-lg">
                  <Image src={m.image} alt={`Portrait of ${m.name}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw" className="object-cover object-[center_20%]" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-navy-900">{m.name}</h3>
                    <p className="text-xs text-slate-500">{m.role}</p>
                  </div>
                  <LinkedInBadge name={m.name} />
                </div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-600">{m.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Opportunities */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 -z-10">
          <Image src="/img/owners-hero.jpg" alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/50" />
        </div>
        <Container className="grid gap-10 py-14 sm:py-16 lg:py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>Investment Opportunities</Eyebrow>
            <Heading className="mt-3 text-white">Let’s Build Value Together.</Heading>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/80">
              We’re always open to connecting with investors, partners, and institutions who share our vision for
              high-quality, well-managed real estate investments.
            </p>
            <CtaButton href="/contact" className="mt-8">
              Discuss Opportunities
            </CtaButton>
          </div>
          <ul data-stagger className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-white/10 sm:grid-cols-4">
            {opportunities.map((o) => (
              <li key={o.label} className="flex flex-col items-center bg-navy-900/85 px-3 py-7 text-center backdrop-blur">
                <o.icon className="size-8 text-gold-400" strokeWidth={1.3} />
                <span className="mt-3 text-[13px] leading-snug">{o.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
