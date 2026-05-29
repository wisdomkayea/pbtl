import { useEffect } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/**
 * Adds one-time reveal transitions to elements marked with data-reveal.
 */
export function useScrollReveal(selector = "[data-reveal]") {
	useEffect(() => {
		const elements = Array.from(document.querySelectorAll<HTMLElement>(selector));
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
			const delay = element.dataset.revealDelay;
			if (delay) {
				element.style.setProperty("--reveal-delay", `${delay}ms`);
			}
			observer.observe(element);
		});

		return () => {
			observer.disconnect();
		};
	}, [selector]);
}
