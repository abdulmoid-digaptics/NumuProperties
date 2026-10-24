import type { Metadata } from "next";
import Image from "next/image";
import {
  CircleCheck,
  CreditCard,
  FilePen,
  FileText,
  Handshake,
  Headset,
  House,
  KeyRound,
  MapPin,
  MessageSquareMore,
  Search,
  Wrench,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CtaButton } from "@/components/site/cta-button";
import {
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

export const metadata: Metadata = {
  title: "For Tenants"
};

const reasons = [
  { icon: House, title: "Well-Maintained Homes", text: "Clean, comfortable properties you’ll be proud to call home." },
  { icon: Headset, title: "Responsive Support", text: "Our team is here when you need us." },
  { icon: MapPin, title: "Great Locations", text: "Convenient access to work, schools, shopping and more." },
  { icon: Handshake, title: "Fair & Transparent", text: "Clear terms, easy communication, and a straightforward leasing process." },
];

const steps = [
  { icon: Search, title: "Browse Properties", text: "Explore available rentals in your preferred location." },
  { icon: FileText, title: "Submit Application", text: "Complete a simple online application." },
  { icon: CircleCheck, title: "Review & Approval", text: "We’ll review your application and get back to you quickly." },
  { icon: FilePen, title: "Sign Lease", text: "Review and sign your lease securely online or in person." },
  { icon: KeyRound, title: "Move In", text: "Get the keys and settle into your new home!" },
];

const resources = [
  { icon: Wrench, title: "Maintenance Requests", text: "Submit and track maintenance requests online." },
  { icon: CreditCard, title: "Pay Rent Online", text: "Secure and convenient online rent payments." },
  { icon: FileText, title: "Lease Documents", text: "Access your lease and important property documents." },
  { icon: MessageSquareMore, title: "Contact Support", text: "Get in touch with our property management team." },
];

// Answers are placeholder copy — the mockup only shows the questions.
const faqs = [
  {
    q: "How do I apply for a rental?",
    a: "Contact our team to ask about available properties and application requirements. We’ll help you find a suitable home and explain the next steps.",
  },
  {
    q: "What are the leasing terms?",
    a: "Most leases are 12 months, with other terms available on select properties. Your leasing specialist will walk you through the details before you sign.",
  },
  {
    q: "How do I submit a maintenance request?",
    a: "Log in to the tenant portal and submit a request with a description and photos. You can track its status in real time, and emergencies are handled 24/7.",
  },
  {
    q: "How do I pay rent?",
    a: "Rent can be paid securely online through the tenant portal using bank transfer or card, with the option to set up automatic payments.",
  },
  {
    q: "Do you allow pets?",
    a: "Many of our properties are pet-friendly. Pet policies vary by property, so check the listing or contact our team for details.",
  },
];

export default function TenantsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Tenants"
        image="/img/tenants-hero.jpg"
        imageAlt="Smiling family relaxing together on a sofa in a bright modern home"
        imageClassName="object-[60%_center]"
        title={
          <>
            Find a Place <Gold>to Call Home.</Gold>
          </>
        }
      >
        <p className="mt-5 font-sans text-lg leading-snug font-semibold text-white sm:text-xl">
          Quality homes. Responsive management.
          <br />A better rental experience.
        </p>
        <HeroLead className="mt-3">
          At NUMU Property Management, we provide clean, well-maintained homes in great locations with a responsive
          team that’s here to support you every step of the way.
        </HeroLead>
        <HeroActions>
          <CtaButton href="/contact">Ask About Available Properties</CtaButton>
          <CtaButton href="/contact" variant="outline" arrow={false}>
            Contact Our Team
          </CtaButton>
        </HeroActions>
      </PageHero>

      {/* Why rent */}
      <Section tone="cream">
        <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow line>Why Rent With NUMU</Eyebrow>
            <Heading className="mt-3 text-navy-900">A Better Rental Experience.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              We’re committed to creating safe, comfortable homes and a seamless rental experience for all our tenants.
            </p>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <li key={r.title}>
                <FeatureTile boxed icon={r.icon} title={r.title} text={r.text} className="h-full" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Quality living */}
      <section className="grid bg-navy-900 text-white lg:grid-cols-[1.15fr_1fr]">
        <div data-reveal className="relative min-h-[280px] sm:min-h-[360px]">
          <Image src="/img/tenants-living.jpg" alt="Modern living room with floor-to-ceiling city views" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
        </div>
        <Container className="py-14 sm:py-16 lg:py-20 lg:ml-0 lg:max-w-[560px] lg:px-12">
          <div data-reveal>
            <Eyebrow>Quality Living</Eyebrow>
            <Heading className="mt-3 text-white">Homes Designed for the Way You Live.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-[15px]">
              From modern apartments to spacious single-family homes, our properties are designed with comfort,
              functionality, and community in mind.
            </p>
            <CtaButton href="/contact" className="mt-8">
              Ask About Available Rentals
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* Rental process */}
      <Section tone="cream">
        <Container>
          <div data-reveal>
            <Eyebrow>How It Works</Eyebrow>
            <Heading className="mt-3 text-navy-900">A Simple Rental Process.</Heading>
          </div>
          <Steps steps={steps} className="mt-12" />
        </Container>
      </Section>

      {/* Tenant resources */}
      <Section tone="cream" className="pt-0 sm:pt-0 lg:pt-0">
        <Container className="grid gap-10 border-t border-black/10 pt-14 lg:grid-cols-[1fr_2fr] lg:items-center">
          <div data-reveal>
            <Eyebrow>Tenant Resources</Eyebrow>
            <Heading className="mt-3 text-navy-900">We’re Here for You.</Heading>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
              Access helpful resources to make your rental experience as easy as possible.
            </p>
            <CtaButton href="/contact" className="mt-8">
              Request Portal Access
            </CtaButton>
          </div>
          <ul data-stagger className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 lg:grid-cols-4">
            {resources.map((r) => (
              <li key={r.title}>
                <FeatureTile boxed icon={r.icon} title={r.title} text={r.text} className="h-full" />
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Testimonial + FAQ */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Testimonial
            image="/img/tenants-testimonial.jpg"
            quote="NUMU has been an amazing property management company. The team is responsive, professional, and truly cares about their tenants."
            name="Current Tenant"
            location="Oakbrook Terrace, IL"
          />
          <div data-reveal>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <Heading className="mt-3 text-navy-900">Common Questions.</Heading>
            <Accordion className="mt-6 gap-2.5">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="rounded-lg border border-black/10 bg-white px-4 not-last:border-b">
                  <AccordionTrigger className="py-3 text-[13px] font-medium text-ink hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-[13px] leading-relaxed text-slate-600">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </section>
    </>
  );
}
