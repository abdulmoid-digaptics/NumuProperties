import { cn } from "@/lib/utils";

export type CtaVariant = "gold" | "outline" | "outline-dark" | "navy";

/** Pill buttons used throughout the mockups. */
export function ctaClass(variant: CtaVariant = "gold", className?: string) {
  return cn(
    "group/cta inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-full px-6 py-2.5 text-center text-[13px] font-semibold tracking-[0.01em] transition-all min-[480px]:whitespace-nowrap duration-300 outline-none focus-visible:ring-3 focus-visible:ring-gold-400/50 [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform hover:[&_svg]:translate-x-0.5",
    variant === "gold" && "bg-gold-400 text-navy-900 shadow-[0_8px_24px_-12px_rgba(214,162,86,0.8)] hover:bg-gold-300",
    variant === "outline" && "border border-white/70 text-white hover:bg-white hover:text-navy-900",
    variant === "outline-dark" && "border border-navy-900/30 text-navy-900 hover:bg-navy-900 hover:text-white",
    variant === "navy" && "bg-navy-900 text-white hover:bg-navy-800",
    className
  );
}
