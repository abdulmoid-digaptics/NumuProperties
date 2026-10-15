import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** NUMU stacked logo, white-and-gold version for the site's navy backgrounds. */
export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link href={href} aria-label="NUMU Property Management — home" className={cn("inline-flex h-14 shrink-0 sm:h-[72px]", className)}>
      <Image src="/img/logo.png" alt="NUMU Property Management" width={608} height={600} className="h-full w-auto" />
    </Link>
  );
}
