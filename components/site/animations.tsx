"use client";

import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// One motion language for the whole site.
const ENTER = { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" } as const;
const FROM = { autoAlpha: 0, y: 32 } as const;
const STAGGER = 0.08;
const START = "top 88%";

/**
 * Page-level GSAP motion, driven by data attributes so pages stay server components:
 * data-hero (children intro), data-hero-image (zoom-out), data-parallax, data-reveal,
 * data-stagger (children), data-count (number count-up with data-prefix/data-suffix).
 * Content is visible by default; motion is a progressive enhancement.
 */
export function Animations() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo("[data-hero] > *", FROM, { ...ENTER, stagger: STAGGER, delay: 0.1 });

        gsap.utils.toArray<HTMLElement>("[data-hero-image]").forEach((el) => {
          gsap.fromTo(el, { scale: 1.08 }, { scale: 1, duration: 1.6, ease: "power2.out" });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          // The layer is 16% taller than its frame, so ±6% never exposes an edge.
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: el.closest("section") ?? el, start: "top top", end: "bottom top", scrub: true },
            }
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          gsap.fromTo(el, FROM, { ...ENTER, scrollTrigger: { trigger: el, start: START, once: true } });
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((el) => {
          gsap.fromTo(el.children, FROM, {
            ...ENTER,
            stagger: STAGGER,
            scrollTrigger: { trigger: el, start: START, once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const end = parseFloat(el.dataset.count ?? "0");
          const decimals = (el.dataset.count?.split(".")[1] ?? "").length;
          const prefix = el.dataset.prefix ?? "";
          const suffix = el.dataset.suffix ?? "";
          const state = { v: 0 };
          const render = () => (el.textContent = `${prefix}${state.v.toFixed(decimals)}${suffix}`);
          render();
          gsap.to(state, {
            v: end,
            duration: 1.6,
            ease: "power2.out",
            onUpdate: render,
            scrollTrigger: { trigger: el, start: START, once: true },
          });
        });
      });

      ScrollTrigger.refresh();
      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true }
  );

  return null;
}
