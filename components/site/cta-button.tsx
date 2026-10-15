"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useQuote } from "./quote-dialog";
import { ctaClass, type CtaVariant } from "./styles";

/** Pill button: navigates when given `href`, otherwise opens the quote dialog. */
export function CtaButton({
  children,
  href,
  variant = "gold",
  arrow = true,
  className,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: CtaVariant;
  arrow?: boolean;
  className?: string;
  onClick?: () => void;
}) {
  const { open } = useQuote();
  const content = (
    <>
      {children}
      {arrow && <ArrowRight />}
    </>
  );
  if (href) {
    return (
      <Link href={href} onClick={onClick} className={ctaClass(variant, className)}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" onClick={() => { onClick?.(); open(); }} className={ctaClass(variant, className)}>
      {content}
    </button>
  );
}
