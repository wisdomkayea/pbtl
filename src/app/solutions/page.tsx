import "./page.css";
import Link from "next/link";
import ABOUT_PATTERN from "../../assets/images/about-pattern.png";
import SERVICE_SOFTWARE from "../../assets/images/services/service-software.webp";
import SERVICE_AUDIT from "../../assets/images/services/service-audit.webp";
import SERVICE_CARE from "../../assets/images/services/care-rostering.webp";
import SERVICE_INTEGRITY from "../../assets/images/services/service-integrity.webp";
import SERVICE_LIMS from "../../assets/images/services/service-verification.webp";
import SERVICE_MEDICAL from "../../assets/images/services/medical-administrative.webp";
import SERVICE_CERTIFICATE from "../../assets/images/services/certificate-management.webp";
import SERVICE_BRAND from "../../assets/images/services/service-brand.webp";

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
		image: SERVICE_SOFTWARE.src,
		accent: "neutral"
	},
	{
		title: "Technology Auditing and Assurance",
		description:
			"We conduct independent Technology Auditing and Assurance services to evaluate the effectiveness, security, reliability, and compliance of existing IT systems and digital infrastructure. Our audits help organizations identify vulnerabilities, improve system performance, and ensure their technology investments are well protected and optimally utilized.",
		image: SERVICE_AUDIT.src,
		accent: "soft"
	},
	{
		title: "Care Rostering Management Systems",
		description:
			"Our Care Rostering Management System is a powerful, user-friendly solution designed to optimize staff scheduling, shift management, and resource allocation in healthcare and social care environments. It automates rostering processes, reduces scheduling conflicts, ensures adequate coverage, and improves workforce efficiency while maintaining compliance with working hour regulations and staff preferences. With real-time updates and insightful reporting, organizations can minimize overtime costs, reduce staff burnout, and enhance overall service delivery quality.",
		image: SERVICE_CARE.src,
		accent: "neutral"
	},
	{
		title: "Asset Integrity and Reliability",
		description:
			"We specialize in Reliability Engineering and Asset Integrity Management, including Risk-Based Inspection (RBI) programs. Our solutions help clients maintain the integrity of critical assets, predict failures before they occur, and optimize maintenance strategies to reduce downtime and maintenance costs.",
		image: SERVICE_INTEGRITY.src,
		accent: "soft"
	},
	{
		title: "Medical Administrative Records System: ",
		description:
			"We provide a secure and efficient Medical Administrative Records System that streamlines patient registration, appointment management, billing, and administrative workflows in healthcare facilities. The system ensures accurate documentation, quick retrieval of records, and seamless coordination between departments while maintaining strict data privacy and regulatory compliance. By digitizing administrative processes, healthcare providers can significantly reduce paperwork, minimize errors, improve patient experience, and focus more on quality clinical care.",
		image: SERVICE_MEDICAL.src,
		accent: "soft"
	},
	{
		title: "Corporate Branding & Digital Solutions",
		description:
			"Great brands are not made by accident - they are built with intention. PBTL combines strategic thinking with creative execution to deliver brand identities that are professional, memorable, and aligned with your business goals.",
		image: SERVICE_BRAND.src,
		accent: "soft"
	},
	{
		title: "Laboratory Information Management System",
		description:
			"Our Laboratory Information Management System (LIMS) is a comprehensive digital solution that automates laboratory operations, from sample management and test scheduling to result recording, reporting, and quality control. ",
		image: SERVICE_LIMS.src,
		accent: "neutral"
	},
	{
		title: "Certificate Management and Verification System",
		description:
			"Our Certificate Management and Verification System offers a secure, centralized platform for issuing, storing, tracking, and verifying professional certificates, training credentials, and compliance documents. It eliminates the risks associated with fake certificates through blockchain-enabled or advanced digital verification features, giving organizations and stakeholders instant confidence in the authenticity of credentials. This solution is ideal for training institutions, regulatory bodies, and companies seeking to strengthen competence management and compliance assurance.",
		image: SERVICE_CERTIFICATE.src,
		accent: "neutral"
	}
];

function SolutionsPage() {
	return (
		<div className="services-page" aria-label="Solutions offered by PBTL">
			<section className="services-hero" data-reveal="zoom">
				<div
					className="services-hero-pattern"
					style={{ backgroundImage: `url(${ABOUT_PATTERN.src})` }}
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
					<h2 data-reveal data-reveal-delay="30">Solutions We Offer</h2>
					<p data-reveal data-reveal-delay="70">
						Browse our full range of technology services below. Each one is delivered
						by a team of experts who understand your industry and are committed to
						getting it right.
					</p>
				</div>
			</section>

			<section className="services-list" aria-label="Service categories" >
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
								data-reveal-delay={String(50 + (index % 2) * 20)}
							>
								<div className="services-card-copy">
									<h3>{item.title}</h3>
									<p>{item.description}</p>
								</div>
								<div className="services-card-image-wrap">
									<img src={item.image} alt={item.title} className={`${isReversed ? "services-card-image" : "services-card-image-reversed"} `} />
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
					<Link href="/contact" className="services-cta-button">
						Contact Us
					</Link>
				</div>
			</section>
		</div>
	);
}

export default SolutionsPage;
