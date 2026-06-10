import "./page.css";
// import INDUSTRIES_HERO_NETWORK_IMAGE from "../../assets/images/industries-hero-network.png";
import INDUSTRIES_HERO_SHAPE from "../../assets/images/industries-hero-shape.svg";
import INDUSTRIES_GRID_ENERGY_IMAGE from "../../assets/images/industries-grid-energy.webp";
import INDUSTRIES_GRID_MANUFACTURING_IMAGE from "../../assets/images/industries-grid-manufacturing.webp";
import INDUSTRIES_GRID_HEALTH_IMAGE from "../../assets/images/health.webp";
import INDUSTRIES_GRID_FOOD_IMAGE from "../../assets/images/industries-grid-food.webp";
import INDUSTRIES_GRID_MARITIME_IMAGE from "../../assets/images/industries-grid-maritime.webp";
import INDUSTRIES_GRID_TECH_IMAGE from "../../assets/images/industries-grid-tech.webp";
import INDUSTRIES_GRID_INSURANCE_IMAGE from "../../assets/images/industries-grid-insurance.webp";

const INDUSTRIES_GRID_ITEMS = [
	{
		title: "Energy & Natural Resources",
		description:
			"Compliance management, ERP integration, asset lifecycle management, and data-driven decision platforms, operational optimization and I.T systems/infrastructure auditing.",
		image: INDUSTRIES_GRID_ENERGY_IMAGE.src,
		overlayOpacity: 0.4 
	},
	{
		title: "Manufacturing",
		description:
			"Enhancing operational efficiency, smart factory solutions, ERP/MES integration, and supply chain visibility tools. Quality management systems (QMS), traceability, and risk management platforms.",
		image: INDUSTRIES_GRID_MANUFACTURING_IMAGE.src,
		overlayOpacity: 0.8
	},
	{
		title: "Healthcare",
		description:
			"Care coordination and rostering platforms, and compliance management tools. Workforce management, patient engagement solutions, and telehealth platforms.",
		image: INDUSTRIES_GRID_HEALTH_IMAGE.src,
		overlayOpacity: 0.8
	},
	{
		title: "Food and Agriculture",
		description:
			"Food safety compliance systems and traceability platforms, inventory management, and supply chain digitization.",
		image: INDUSTRIES_GRID_FOOD_IMAGE.src,
		overlayOpacity: 0.8
	},
	{
		title: "Maritime",
		description:
			"Vessel compliance systems, port regulatory tracking, and safety management platforms. Fleet management systems, predictive maintenance, and automated logistics coordination.",
		image: INDUSTRIES_GRID_MARITIME_IMAGE.src,
		overlayOpacity: 0.8
	},
	{
		title: "Technology and Communication",
		description:
			"Cybersecurity frameworks, data protection systems, and compliance monitoring, cloud infrastructure, API ecosystems, and digital service platforms. Network optimization, service automation, and customer experience solutions.",
		image: INDUSTRIES_GRID_TECH_IMAGE.src,
		overlayOpacity: 0.4
	},
	{
		title: "Insurance and Financial Institutions",
		description:
			"Governance, risk, and compliance (GRC) platforms, fraud detection, and audit systems, enterprise data management, BI dashboards, and performance management systems.",
		image: INDUSTRIES_GRID_INSURANCE_IMAGE.src,
		overlayOpacity: 0.5
	}
	
];

function IndustriesPage() {
	return (
		<>
			<section className="industries-figma-hero" aria-label="Industries served by PBTL" data-reveal="zoom">
				<img
					src={INDUSTRIES_HERO_SHAPE.src}
					alt=""
					className="industries-figma-shape"
					aria-hidden="true"
				/>

				<div className="container industries-figma-content">
					<h1 className="industries-figma-title" data-reveal data-reveal-delay="50">
						<span>Powering Industries</span>
						<span>
							With <span className="industries-figma-title-accent">Smart Technology</span> </span>
						<span>
						Solutions</span>
					</h1>

					<p className="industries-figma-description" data-reveal data-reveal-delay="120">
						PBTL builds innovative solutions across engineering, healthcare, technology, consultancy, and
						enterprise operations helping businesses meet compliance demands, streamline processes, improve
						performance, and scale with confidence.
					</p>

					{/* <div>
						<img
						src={INDUSTRIES_HERO_NETWORK_IMAGE.src}
						alt="Abstract digital network visualization"
						className="industries-figma-network"
						data-reveal="zoom"
						data-reveal-delay="160"
					/>
					</div> */}
				</div>
			</section>

			<section className="industries-figma-grid-section" aria-label="Industry solutions sectors" data-reveal>
				<div className="industries-figma-grid-wrap">
					<div className="industries-figma-grid">
						{INDUSTRIES_GRID_ITEMS.map((item, index) => (
							<article
								className="industries-figma-card"
								key={item.title}
								data-reveal="zoom"
								data-reveal-delay={String(70 + (index % 2) * 200)}
							>
								<img src={item.image} alt={item.title} className="industries-figma-card-image" />
								<div
									className="industries-figma-card-overlay"
									style={{ opacity: item.overlayOpacity }}
									aria-hidden="true"
								/>
								<div className="industries-figma-card-content">
									<h2>{item.title}</h2>
									<p>{item.description}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default IndustriesPage;
