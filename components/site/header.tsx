"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { headerCta, mainNav, servicesMenu } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { CtaButton } from "./cta-button";
import { Container } from "./primitives";

const serviceRoutes = ["/services", "/short-term-rentals", "/partners"];

function isActive(pathname: string, href: string) {
  if (href === "/services") return serviceRoutes.includes(pathname);
  if (href.includes("#")) return false;
  return pathname === href;
}

const linkClass = (active: boolean) =>
  cn(
    "relative py-2 text-[13px] font-medium whitespace-nowrap transition-colors hover:text-gold-400",
    active ? "text-gold-400 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-gold-400" : "text-white/90"
  );

export function Header() {
  const pathname = usePathname();
  const cta = headerCta[pathname] ?? { label: "Get a Quote" };
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-white/10 bg-navy-900 transition-shadow duration-300",
        scrolled && "bg-navy-900/95 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] backdrop-blur-md"
      )}
    >
      <Container className="flex h-[72px] items-center justify-between gap-4 sm:h-[88px]">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-3.5 xl:flex xl:gap-7">
          {mainNav.map((item) =>
            item.label === "Services" ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger openOnHover delay={60} className={cn(linkClass(isActive(pathname, item.href)), "inline-flex items-center gap-1 outline-none")}>
                  Services <ChevronDown className="size-3.5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-56 rounded-lg border-0 bg-white p-1.5 shadow-xl">
                  {servicesMenu.map((s) => (
                    <DropdownMenuItem
                      key={s.href}
                      render={<Link href={s.href} />}
                      className="cursor-pointer rounded-md px-3 py-2 text-[13px] font-medium text-ink focus:bg-cream focus:text-gold-600"
                    >
                      {s.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.label} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className={linkClass(isActive(pathname, item.href))}>
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton href={cta.href} className="hidden min-h-10 px-4 sm:inline-flex xl:px-6">
            {cta.label}
          </CtaButton>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold-400 hover:text-gold-400 xl:hidden"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[86%] max-w-sm border-white/10 bg-navy-900 p-0 text-white [&_[data-slot=sheet-close]]:text-white">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="border-b border-white/10 p-5">
                <Logo />
              </div>
              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-4">
                <ul className="space-y-1">
                  {mainNav.map((item) => (
                    <li key={item.label}>
                      <SheetClose
                        nativeButton={false}
                        render={<Link href={item.href} />}
                        className={cn(
                          "block rounded-md px-3 py-2.5 text-[15px] font-medium",
                          isActive(pathname, item.href) ? "bg-white/5 text-gold-400" : "text-white/90 hover:bg-white/5"
                        )}
                      >
                        {item.label}
                      </SheetClose>
                      {item.label === "Services" && (
                        <ul className="mb-2 ml-3 border-l border-white/10 pl-3">
                          {servicesMenu.slice(1).map((s) => (
                            <li key={s.href}>
                              <SheetClose
                                nativeButton={false}
                                render={<Link href={s.href} />}
                                className={cn("block px-3 py-2 text-sm", pathname === s.href ? "text-gold-400" : "text-white/70 hover:text-white")}
                              >
                                {s.label}
                              </SheetClose>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="border-t border-white/10 p-5">
                <CtaButton href={cta.href} onClick={() => setMenuOpen(false)} className="w-full">
                  {cta.label}
                </CtaButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
