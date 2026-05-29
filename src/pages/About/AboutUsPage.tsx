import ABOUT_PATTERN from "../../assets/images/about-pattern.png";
const ABOUT_SHAPE = "https://www.figma.com/api/mcp/asset/6ed8c196-a71c-4077-a324-23de0d52f0e2";
import VISION_IMAGE from "../../assets/images/vision.png";
import MISSION_IMAGE from "../../assets/images/mission.png";
const RING_LEFT = "../../assets/images/ring_left.png";
const RING_RIGHT = "../../assets/images/ring_right.png";
import { JusticeScale01Icon, ZapIcon, BulbIcon, TradeUpIcon } from "hugeicons-react";
import "./About.css";

const STATS = [
	{ value: "500+", label: "Organizations Served" },
	{ value: "8+", label: "Sectors" },
	{ value: "4+", label: "Technology Products" },
	{ value: "99%", label: "Client retention rate" }
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
	return (
		<div className="about-bridge-page" aria-label="About PBTL">
			<section className="about-bridge-hero">
				<div
					className="about-bridge-pattern"
					style={{ backgroundImage: `url(${ABOUT_PATTERN})` }}
					aria-hidden="true"
				/>
				<div className="about-bridge-shape" aria-hidden="true">
					<img src={ABOUT_SHAPE} alt="" />
				</div>
				<div className="container about-bridge-hero-content">
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

			<section className="about-bridge-stats" aria-label="Company statistics">
				<div className="container about-bridge-stats-grid">
					{STATS.map((stat) => (
						<div key={stat.label} className="about-stat-item">
							<p className="about-stat-value">{stat.value}</p>
							<p className="about-stat-label">{stat.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="about-bridge-mission-vision">
				<div className="container about-bridge-mv-wrap">
					<img src={RING_LEFT} className="about-ring-left" alt="" aria-hidden="true" />
					<img src={RING_RIGHT} className="about-ring-right" alt="" aria-hidden="true" />
					{/* <img src={RING_LEFT} className="about-bridge-ring about-bridge-ring-left" alt="" aria-hidden="true" />
					<img src={RING_RIGHT} className="about-bridge-ring about-bridge-ring-right" alt="" aria-hidden="true" /> */}

					<div className="about-bridge-row about-bridge-row-vision">
						<div className="about-bridge-image-wrap">
							<img src={VISION_IMAGE} alt="Hand holding a magnifier"/>
						</div>
						<div className="about-bridge-text-wrap">
							<h2>Vision</h2>
							<p>
								To emerge as a leading technology services provider distinguished by our
								commitment to quality, standards and innovation.
							</p>
						</div>
					</div>

					<div className="about-bridge-row about-bridge-row-mission">
						<div className="about-bridge-text-wrap">
							<h2>Mission</h2>
							<p>
								To drive the future of commerce by seamlessly integrating advanced technology
								into core business processes, turning digital transformation into a
								competitive advantage.
							</p>
						</div>
						<div className="about-bridge-image-wrap">
							<img src={MISSION_IMAGE} alt="Ladder toward a target" />
						</div>
					</div>

					<div className="about-bridge-core-values">
						<h2>Core Values</h2>
						<div className="about-bridge-values-grid">
							{CORE_VALUES.map((value) => (
								<div key={value.label} className="about-value-chip">
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
