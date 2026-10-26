import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** NUMU stacked logo, green-and-white version for dark charcoal backgrounds. */
export function Logo({
  className,
  href = "/",
  transparent = false,
}: {
  className?: string;
  href?: string;
  transparent?: boolean;
}) {
  return (
    <Link href={href} aria-label="NUMU Property Management — home" className={cn("inline-flex h-14 shrink-0 sm:h-[72px]", className)}>
      <Image
        src={transparent ? "/img/logo.svg" : "/img/logo.png"}
        alt="NUMU Property Management"
        width={transparent ? 600 : 608}
        height={transparent ? 552 : 560}
        priority
        className="h-full w-auto"
      />
    </Link>
  );
}
