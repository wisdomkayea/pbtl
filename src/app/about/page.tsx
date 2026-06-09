"use client";

import { useEffect, useState } from "react";
import "./page.css";
import ABOUT_PATTERN from "../../assets/images/about-pattern.png";
import VISION_IMAGE from "../../assets/images/pbtl-vision.png";
import MISSION_IMAGE from "../../assets/images/pbtl-mission.png";
import RING_LEFT from "../../assets/images/ring_left.png";
import RING_RIGHT from "../../assets/images/ring_right.png";
import { JusticeScale01Icon, ZapIcon, BulbIcon, TradeUpIcon } from "hugeicons-react";

const STATS = [
	{ end: 500, suffix: "+", label: "Organizations Served" },
	{ end: 8, suffix: "+", label: "Sectors" },
	{ end: 4, suffix: "+", label: "Technology Products" },
	{ end: 99, suffix: "%", label: "Client retention rate" }
];

const CORE_VALUES = [
	{
		label: "Truth & Integrity",
		icon: <JusticeScale01Icon />
	},
	{
		label: "Performance Driven",
		icon: <ZapIcon />
	},
	{
		label: "Innovation",
		icon: <BulbIcon />
	},
	{
		label: "Growth",
		icon: <TradeUpIcon />
	}
];

function AboutUsPage() {
	const [animatedStats, setAnimatedStats] = useState<number[]>(() => STATS.map(() => 0));

	useEffect(() => {
		const duration = 1400;
		const start = performance.now();
		let frameId = 0;

		const animate = (now: number) => {
			const progress = Math.min((now - start) / duration, 1);
			setAnimatedStats(STATS.map((stat) => Math.round(stat.end * progress)));

			if (progress < 1) {
				frameId = window.requestAnimationFrame(animate);
			}
		};

		frameId = window.requestAnimationFrame(animate);

		return () => {
			window.cancelAnimationFrame(frameId);
		};
	}, []);

	return (
		<div className="about-bridge-page" aria-label="About PBTL">
			<section className="about-bridge-hero" data-reveal="zoom">
				<div
					className="about-bridge-pattern"
					style={{ backgroundImage: `url(${ABOUT_PATTERN.src})` }}
					aria-hidden="true"
				/>
				<div className="container about-bridge-hero-content" data-reveal data-reveal-delay="70">
					<h1>
						We are the <span>Bridge</span> Between Business and Technology
					</h1>
					<div className="about-bridge-lead-copy">
						<p>
							Proliance Business Technologies Limited was established with a singular purpose:
							to deliver technology that creates real, measurable impact for the organisations
							that depend on it.
						</p>
						<p>
							As a subsidiary of Proliance Ltd, we draw on decades of industry knowledge and
							consulting expertise to help businesses navigate digital transformation with
							clarity, confidence, and lasting results.
						</p>
					</div>
				</div>
			</section>

			<section className="about-bridge-stats" aria-label="Company statistics" data-reveal>
				<div className="container about-bridge-stats-grid">
					{STATS.map((stat, index) => (
						<div key={stat.label} className="about-stat-item" data-reveal="zoom" data-reveal-delay={String(200 + index * 200)}>
							<p className="about-stat-value">{`${animatedStats[index]}${stat.suffix}`}</p>
							<p className="about-stat-label">{stat.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="about-bridge-mission-vision" data-reveal>
				<div className="container about-bridge-mv-wrap">
					{/* <img src={RING_LEFT.src} className="about-ring-left" alt="" aria-hidden="true" />
					<img src={RING_RIGHT.src} className="about-ring-right" alt="" aria-hidden="true" /> */}
					<img src={RING_LEFT.src} className="about-bridge-ring about-bridge-ring-left" alt="" aria-hidden="true" />
					<img src={RING_RIGHT.src} className="about-bridge-ring about-bridge-ring-right" alt="" aria-hidden="true" />

					<div className="about-bridge-row about-bridge-row-vision" data-reveal>
						<div className="about-bridge-image-wrap" data-reveal="left">
							<img src={VISION_IMAGE.src} alt="Hand holding a magnifier"/>
						</div>
						<div className="about-bridge-text-wrap" data-reveal="right" data-reveal-delay="80">
							<h2>Vision</h2>
							<p>
								To emerge as a leading technology services provider distinguished by our
								commitment to quality, standards and innovation.
							</p>
						</div>
					</div>

					<div className="about-bridge-row about-bridge-row-mission" data-reveal>
						<div className="about-bridge-text-wrap" data-reveal="left">
							<h2>Mission</h2>
							<p>
								To drive the future of commerce by seamlessly integrating advanced technology
								into core business processes, turning digital transformation into a
								competitive advantage.
							</p>
						</div>
						<div className="about-bridge-image-wrap" data-reveal="right" data-reveal-delay="80">
							<img src={MISSION_IMAGE.src} alt="Ladder toward a target" />
						</div>
					</div>

					<div className="about-bridge-core-values" data-reveal>
						<h2 data-reveal="left">Core Values</h2>
						<div className="about-bridge-values-grid">
							{CORE_VALUES.map((value, index) => (
								<div
									key={value.label}
									className="about-value-chip"
									data-reveal="zoom"
									data-reveal-delay={String(50 + index * 70)}
								>
									<span className="about-value-icon" aria-hidden="true">
										{value.icon}
									</span>
									<span className="about-value-label">{value.label}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default AboutUsPage;
