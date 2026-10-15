import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Check, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Animations } from "./animations";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Tone = "white" | "cream" | "sand" | "navy";
const toneClass: Record<Tone, string> = {
  white: "bg-white text-ink",
  cream: "bg-cream text-ink",
  sand: "bg-sand text-ink",
  navy: "bg-navy-900 text-white",
};

export function Section({
  tone = "white",
  id,
  className,
  children,
}: {
  tone?: Tone;
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-14 sm:py-16 lg:py-20", toneClass[tone], className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, line, className }: { children: React.ReactNode; line?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-[11px] font-semibold tracking-[0.22em] text-gold-500 uppercase sm:text-xs",
        className
      )}
    >
      {line && <span aria-hidden className="h-px w-8 bg-gold-500/70" />}
      {children}
    </p>
  );
}

/** Gold accent words inside headings. */
export function Gold({ children }: { children: React.ReactNode }) {
  return <span className="text-gold-400">{children}</span>;
}

export function Heading({
  as: Tag = "h2",
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Tag
      className={cn(
        "font-serif font-medium leading-[1.12] tracking-[-0.01em]",
        Tag === "h1" && "text-[clamp(2.1rem,4.4vw,3.15rem)] leading-[1.08]",
        Tag === "h2" && "text-[clamp(1.75rem,3vw,2.35rem)]",
        Tag === "h3" && "text-[clamp(1.2rem,1.8vw,1.4rem)]",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function IconRing({
  icon: Icon,
  className,
  size = "md",
  solid,
}: {
  icon: LucideIcon;
  className?: string;
  size?: "sm" | "md" | "lg";
  solid?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-full border text-gold-500",
        solid ? "border-transparent bg-navy-900 text-gold-400" : "border-gold-500/70",
        size === "sm" && "size-10 [&_svg]:size-[18px]",
        size === "md" && "size-12 [&_svg]:size-[22px]",
        size === "lg" && "size-14 sm:size-16 [&_svg]:size-6 sm:[&_svg]:size-7",
        className
      )}
    >
      <Icon strokeWidth={1.5} />
    </span>
  );
}

export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "group -my-2 inline-flex items-center gap-1.5 py-2 text-[13px] font-semibold text-gold-600 underline-offset-4 hover:underline",
        className
      )}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

export function CheckList({
  items,
  className,
  variant = "circle",
}: {
  items: string[];
  className?: string;
  variant?: "circle" | "square";
}) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px]">
          <span
            className={cn(
              "mt-0.5 inline-flex size-[18px] shrink-0 items-center justify-center bg-gold-500 text-white",
              variant === "circle" ? "rounded-full" : "rounded-[4px]"
            )}
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export type Step = { icon: LucideIcon; title: string; text: string };

/** Numbered horizontal process used on several pages. */
export function Steps({ steps, dark, className }: { steps: Step[]; dark?: boolean; className?: string }) {
  const cols = steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-5";
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden
        className={cn("absolute top-3 right-[10%] left-[10%] hidden h-px lg:block", dark ? "bg-gold-400/40" : "bg-gold-500/40")}
      />
      <ol data-stagger className={cn("relative grid grid-cols-1 gap-x-6 gap-y-10 min-[480px]:grid-cols-2 md:grid-cols-3", cols)}>
        {steps.map((s, i) => (
          <li key={s.title} className="relative flex flex-col items-center text-center">
            <span className="relative z-10 inline-flex size-6 items-center justify-center rounded-full bg-gold-400 text-[11px] font-bold text-navy-900">
              {i + 1}
            </span>
            <s.icon className={cn("mt-4 size-9 sm:size-10", dark ? "text-gold-400" : "text-navy-900")} strokeWidth={1.4} />
            <h3 className={cn("mt-3 font-serif text-base font-semibold sm:text-[17px]", dark ? "text-white" : "text-navy-900")}>
              {s.title}
            </h3>
            <p className={cn("mt-1.5 max-w-[200px] text-[13px] leading-relaxed", dark ? "text-white/75" : "text-slate-600")}>
              {s.text}
            </p>
            {i < steps.length - 1 && (
              <ChevronRight
                aria-hidden
                className={cn("absolute top-14 -right-5 hidden size-5 lg:block", dark ? "text-white/50" : "text-navy-900/40")}
              />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Icon + title + text tile (benefit grids). */
export function FeatureTile({
  icon,
  title,
  text,
  boxed,
  className,
}: {
  icon: LucideIcon;
  title: string;
  text?: string;
  boxed?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        boxed && "rounded-xl border border-black/5 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(11,28,51,0.35)]",
        className
      )}
    >
      <IconRing icon={icon} />
      <h3 className="mt-3 font-serif text-[15px] font-semibold text-navy-900 sm:text-base">{title}</h3>
      {text && <p className="mt-1.5 text-[13px] leading-relaxed text-slate-600">{text}</p>}
    </div>
  );
}

/** Dark testimonial card: quote on the left, photo fading in on the right. */
export function Testimonial({
  quote,
  name,
  location,
  image,
  className,
}: {
  quote: string;
  name: string;
  location: string;
  image: string;
  className?: string;
}) {
  return (
    <figure
      data-reveal
      className={cn("relative isolate flex min-h-[300px] overflow-hidden rounded-xl bg-navy-900 text-white", className)}
    >
      <div className="absolute inset-y-0 right-0 w-full sm:w-[62%]">
        <Image src={image} alt="" fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/70 to-navy-900/10 sm:via-navy-900/40" />
      </div>
      <div className="relative flex max-w-md flex-col justify-center p-6 sm:p-8 lg:p-10">
        <Quote className="size-8 rotate-180 fill-gold-400 text-gold-400" />
        <blockquote className="mt-4 font-serif text-lg leading-relaxed italic sm:text-xl">“{quote}”</blockquote>
        <span aria-hidden className="mt-6 h-px w-10 bg-gold-400" />
        <figcaption className="mt-4 text-sm">
          <span className="block font-semibold">{name}</span>
          <span className="text-white/75">{location}</span>
        </figcaption>
      </div>
    </figure>
  );
}

/** Dark page hero: copy on the left, photo on the right that fades into navy. */
export function PageHero({
  eyebrow,
  title,
  children,
  image,
  imageAlt,
  aside,
  imageClassName,
  footnote,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  image: string;
  imageAlt: string;
  aside?: React.ReactNode;
  imageClassName?: string;
  /** Small spaced caption in the bottom-right corner (home hero). */
  footnote?: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 text-white">
      {/* Mounted inside the page (not the layout) so GSAP only runs after the page has hydrated. */}
      <Animations />
      <div className="absolute inset-0 -z-10 overflow-hidden md:left-[34%] lg:left-[38%]">
        <div data-parallax className="absolute inset-x-0 -inset-y-[8%]">
          <div data-hero-image className="absolute inset-0">
            <Image
            src={image}
            alt={imageAlt}
            fill
            preload
           
            sizes="(min-width: 768px) 66vw, 100vw"
            className={cn("object-cover", imageClassName)}
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-navy-900/75 md:bg-transparent md:bg-gradient-to-r md:from-navy-900 md:via-navy-900/45 md:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-900/60 to-transparent" />
      </div>
      <Container
        className={cn(
          "relative grid items-center gap-10 py-16 sm:py-20 lg:min-h-[520px] lg:py-24 xl:min-h-[560px]",
          aside && "lg:grid-cols-[minmax(0,1fr)_260px]"
        )}
      >
        <div data-hero className="max-w-[600px]">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Heading as="h1" className="mt-4 text-white">
            {title}
          </Heading>
          {children}
        </div>
        {aside}
        {footnote && (
          <p className="absolute right-4 bottom-6 hidden text-right text-[11px] leading-relaxed tracking-[0.28em] text-white/80 uppercase sm:right-6 md:block lg:right-8">
            {footnote.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        )}
      </Container>
    </section>
  );
}

/** Glass side panel used in the Investor heroes. */
export function HeroPanel({ items }: { items: { icon: LucideIcon; title: string; text?: string }[] }) {
  return (
    <ul
      data-hero
      className="grid gap-5 rounded-xl border border-white/10 bg-navy-950/75 p-6 backdrop-blur-md min-[480px]:grid-cols-2 lg:grid-cols-1"
    >
      {items.map((it) => (
        <li key={it.title} className="flex items-center gap-4">
          <IconRing icon={it.icon} size="sm" className="border-gold-400/80 text-gold-400" />
          <span>
            <span className="block font-serif text-[15px] leading-tight">{it.title}</span>
            {it.text && <span className="mt-0.5 block text-xs text-white/70">{it.text}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function HeroLead({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-5 text-[15px] leading-relaxed text-white/85 sm:text-base", className)}>{children}</p>;
}

export function HeroActions({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">{children}</div>;
}

/** Image-topped card with an icon badge (service / investment cards). */
export function ImageCard({
  image,
  icon: Icon,
  title,
  text,
  href,
  linkLabel = "Learn More",
  imageHeight = "h-40",
}: {
  image: string;
  icon?: LucideIcon;
  title: string;
  text: string;
  href?: string;
  linkLabel?: string;
  imageHeight?: string;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white shadow-[0_14px_40px_-24px_rgba(11,28,51,0.45)] transition-transform duration-300 hover:-translate-y-1">
      <div className={cn("relative overflow-hidden", imageHeight)}>
        <Image
          src={image}
          alt=""
          fill
         
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        {Icon && (
          <span className="absolute -top-6 left-5 inline-flex size-12 items-center justify-center rounded-full border-2 border-white bg-navy-900 text-gold-400 shadow-md sm:left-6">
            <Icon className="size-5" strokeWidth={1.6} />
          </span>
        )}
        <h3 className={cn("font-serif text-xl font-medium text-navy-900", Icon && "mt-5")}>{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{text}</p>
        {href && <ArrowLink href={href} className="mt-4">{linkLabel}</ArrowLink>}
      </div>
    </article>
  );
}

/** Closing dark banner shared by most pages. */
export function CtaBand({
  eyebrow,
  title,
  text,
  actions,
  image,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  text?: string;
  actions: React.ReactNode;
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 text-white">
      {image && (
        <div className="absolute inset-0 -z-10">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
        </div>
      )}
      <SkylineOutline />
      <Container className="relative flex flex-col gap-8 py-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between">
        <div data-reveal className="max-w-2xl">
          {eyebrow && <Eyebrow className="text-gold-400">{eyebrow}</Eyebrow>}
          <Heading className="mt-3 text-white">{title}</Heading>
          {text && <p className="mt-3 text-sm text-white/80 sm:text-[15px]">{text}</p>}
        </div>
        <div data-reveal className="flex flex-col items-start gap-3 min-[420px]:flex-row min-[420px]:items-center lg:flex-col lg:items-center">
          {actions}
        </div>
      </Container>
    </section>
  );
}

/** Faint line-art skyline drawn in the corners of the mockups' dark bands. */
export function SkylineOutline({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 220 120"
      className={cn("pointer-events-none absolute bottom-0 left-0 -z-0 h-28 w-auto text-white/[0.06] sm:h-32", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M0 120V70h18v50M18 120V40h22v80M40 120V20l14-10 14 10v100M68 120V55h20v65M88 120V30h26v90M114 120V65h16v55M130 120V45h22v75M152 120V75h18v45M170 120V58h24v62M194 120V85h26v35" />
    </svg>
  );
}
