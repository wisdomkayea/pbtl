"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function ScrollRevealManager() {
	const pathname = usePathname();

	useEffect(() => {
		const runReveal = () => {
			const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
			if (!elements.length) {
				return;
			}

			const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
			if (prefersReducedMotion) {
				elements.forEach((element) => {
					element.classList.add("is-visible");
				});
				return;
			}

			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							entry.target.classList.add("is-visible");
							observer.unobserve(entry.target);
						}
					});
				},
				{
					threshold: 0.14,
					rootMargin: "0px 0px -10% 0px"
				}
			);

			elements.forEach((element) => {
				element.classList.remove("is-visible");
				const delay = element.dataset.revealDelay;
				if (delay) {
					element.style.setProperty("--reveal-delay", `${delay}ms`);
				}
				observer.observe(element);
			});

			return () => {
				observer.disconnect();
			};
		};

		const cleanupOrVoid = runReveal();

		return () => {
			if (typeof cleanupOrVoid === "function") {
				cleanupOrVoid();
			}
		};
	}, [pathname]);

	return null;
}

export default ScrollRevealManager;