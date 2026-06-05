import { Link } from "react-router-dom";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import ABOUT_PATTERN from "../../assets/images/about-pattern.png";
import SERVICE_SOFTWARE from "../../assets/images/services/service-software.png";
import SERVICE_AUDIT from "../../assets/images/services/service-audit.png";
import SERVICE_COMMISSIONING from "../../assets/images/services/service-commissioning.png";
import SERVICE_INTEGRITY from "../../assets/images/services/service-integrity.png";
import SERVICE_VERIFICATION from "../../assets/images/services/service-verification.png";
import SERVICE_BRAND from "../../assets/images/services/service-brand.png";
import "./Services.css";

type ServiceItem = {
	title: string;
	description: string;
	image: string;
	accent: "soft" | "neutral";
};

const SERVICE_ITEMS: ServiceItem[] = [
	{
		title: "Software Development & Digital Solutions",
		description:
			"We design, develop, and implement customized software solutions and enterprise systems including ERP (HR, Recruitment, Care Rostering, Task Manager, Onboarding), Learning Management Systems, Electronic Document Management Systems, Customer Relationship Management (CRM) Systems, and Asset Management Systems.",
		image: SERVICE_SOFTWARE,
		accent: "neutral"
	},
	{
		title: "Technology Auditing and Assurance",
		description:
			"We conduct independent Technology Auditing and Assurance services to evaluate the effectiveness, security, reliability, and compliance of existing IT systems and digital infrastructure. Our audits help organizations identify vulnerabilities, improve system performance, and ensure their technology investments are well protected and optimally utilized.",
		image: SERVICE_AUDIT,
		accent: "soft"
	},
	{
		title: "Commissioning and Start Up",
		description:
			"We provide professional Commissioning and Start-up services to ensure smooth transition from construction to full commercial operations. Our structured commissioning methodology includes system testing, pre-commissioning activities, integrated system checks, and performance verification to guarantee facilities operate as designed.",
		image: SERVICE_COMMISSIONING,
		accent: "soft"
	},
	{
		title: "Asset Integrity and Reliability",
		description:
			"We specialize in Reliability Engineering and Asset Integrity Management, including Risk-Based Inspection (RBI) programs. Our solutions help clients maintain the integrity of critical assets, predict failures before they occur, and optimize maintenance strategies to reduce downtime and maintenance costs.",
		image: SERVICE_INTEGRITY,
		accent: "soft"
	},
	{
		title: "Verification, Cost & Documentation",
		description:
			"We offer independent Third Party Verification, Cost Engineering, and As-built Documentation services. These services provide clients with confidence in the quality and accuracy of engineering deliverables while ensuring proper documentation for future reference, maintenance, and regulatory compliance.",
		image: SERVICE_VERIFICATION,
		accent: "neutral"
	},
	{
		title: "Brand Identity Design",
		description:
			"Great brands are not made by accident - they are built with intention. PBTL combines strategic thinking with creative execution to deliver brand identities that are professional, memorable, and aligned with your business goals.",
		image: SERVICE_BRAND,
		accent: "soft"
	}
];

function ServicesPage() {
	useScrollReveal();

	return (
		<div className="services-page" aria-label="Services offered by PBTL">
			<section className="services-hero" data-reveal="zoom">
				<div
					className="services-hero-pattern"
					style={{ backgroundImage: `url(${ABOUT_PATTERN})` }}
					aria-hidden="true"
				/>
				<div className="container services-hero-content">
					<h1 data-reveal data-reveal-delay="40">
						Everything Your Business Needs to Grow, Backed by Technology
					</h1>
					<p data-reveal data-reveal-delay="100">
						PBTL builds innovative solutions across engineering, technology,
						consultancy, and enterprise operations helping businesses streamline
						processes, improve performance, and scale with confidence.
					</p>
				</div>
			</section>

			<section className="services-intro" data-reveal>
				<div className="container">
					<h2 data-reveal data-reveal-delay="30">Services We Offer</h2>
					<p data-reveal data-reveal-delay="70">
						Browse our full range of technology services below. Each one is delivered
						by a team of experts who understand your industry and are committed to
						getting it right.
					</p>
				</div>
			</section>

			<section className="services-list" aria-label="Service categories" data-reveal>
				{SERVICE_ITEMS.map((item, index) => {
					const isReversed = index % 2 === 1;
					return (
						<article
							key={item.title}
							className={`services-card services-card-${item.accent} ${isReversed ? "services-card-reversed" : ""}`}
							data-reveal
						>
							<div
								className="container services-card-inner"
								data-reveal="zoom"
								data-reveal-delay={String(50 + (index % 2) * 60)}
							>
								<div className="services-card-copy">
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
								<div className="services-card-image-wrap">
									<img src={item.image} alt={item.title} className="services-card-image" />
								</div>
							</div>
						</article>
					);
				})}
			</section>

			<section className="services-cta" data-reveal="zoom">
				<div className="container services-cta-content">
					<h2>Let's Find the Right Solution for You</h2>
					<p>
						See a service that fits your business? Reach out to our team and we will
						walk you through how PBTL can implement it for your organisation quickly
						and efficiently.
					</p>
					<Link to="/contact" className="services-cta-button">
						Contact Us
					</Link>
				</div>
			</section>
		</div>
	);
}

export default ServicesPage;
