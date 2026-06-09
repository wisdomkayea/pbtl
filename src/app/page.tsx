"use client";

import { useEffect, useState } from "react";
import "./page.css";
import Link from "next/link";
import HERO_BG from "../assets/images/hero-img.png";
import Care from "../assets/images/Rostering.svg";
import Recruitment from "../assets/images/Recruitment.svg";
import HumanResources from "../assets/images/Hr.svg";
import Workhub from "../assets/images/Workhub.svg";
import Prolearn from "../assets/images/PRO Learn.svg";
import ProDMS from "../assets/images/ProDMS Logo.svg";
import Audit from "../assets/images/AuditCompiance.svg";
import Assets from "../assets/images/Assetsmanagement.svg";
import Finance from "../assets/images/Finance.svg";
import Procurement from "../assets/images/Procurement.svg";
import CMVP from "../assets/images/cmvp-icon.svg";

import Proliance from "../assets/images/proliance.png";
import E3OS from "../assets/images/E3OS.png";

import Tonna from "../assets/images/tonna.jpeg";
import Patience from "../assets/images/patience.jpeg";
import Daniel from "../assets/images/daniel.png";
import Victory from "../assets/images/victory.jpeg";

type ModalVariant = "e3os" | "pro";

type SolutionItem = {
	icon: string;
	title: string;
	description: string;
	fullDescription?: string;
	modalVariant: ModalVariant;
	primaryAction: {
		label: string;
		href: string;
	};
	secondaryAction?: {
		label: string;
		href: string;
	};
};

const SOLUTIONS: SolutionItem[] = [
	{
		icon: Care.src,
		title: "E3OS Care Administrator",
		description: "Stay in control of care delivery, team coordination, and daily operations based on compliance.",
		fullDescription:
			"E3OS Care Administrator is a comprehensive healthcare management solution designed to streamline patient care coordination, ward management, and administrative workflows in hospitals and care facilities. It enables efficient bed management, care team coordination, appointment scheduling, and real-time visibility into patient journeys while ensuring full compliance with healthcare regulations. With intuitive dashboards and automated processes, E3OS Care Administrator helps healthcare providers deliver better patient outcomes, reduce administrative burden, and improve overall operational efficiency.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=care-administrator"
		}
	},
	{
		icon: Recruitment.src,
		title: "E3OS Recruitment",
		description: "From applications to onboarding, manage your hiring in one place.",
		fullDescription:
			"E3OS Recruitment is a powerful, end-to-end talent acquisition platform that simplifies the entire hiring process from vacancy posting and candidate sourcing to application tracking, interview scheduling, and onboarding. It features advanced candidate evaluation tools, automated workflows, and compliance checks that help organizations attract, select, and onboard top talent faster and more efficiently. Designed for both corporate and manpower supply businesses, E3OS Recruitment reduces recruitment time and cost while improving the quality of hires.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=recruitment"
		}
	},
	{
		icon: ProDMS.src,
		title: "PRO DMS",
		description: "Organize your documents, stay compliant, and work with confidence.",
		fullDescription: "PRO-DMS is a comprehensive document management system designed to support complex engineering projects. Our platform provides a secure, version-controlled environment for managing multiple file formats, role-based access, document indexing, automated transmittals, and other essential design control processes.",
		modalVariant: "pro",
		primaryAction: {
			label: "View Details",
			href: "/files/PRO_DMS.pdf"
		},
		secondaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=pro-dms"
		}
	},
	{
		icon: HumanResources.src,
		title: "E3OS Human Resources",
		description: "Manage your team in one place with workflows for daily HR tasks.",
		fullDescription:
			"E3OS Human Resources is a modern, all-in-one HR management solution that covers employee lifecycle management, performance appraisal, payroll integration, leave management, and employee self-service portals. It helps organizations build a motivated workforce by streamlining HR processes, ensuring policy compliance, and fostering better employee engagement. With powerful analytics and reporting, E3OS Human Resources enables HR teams to shift from administrative tasks to strategic talent development.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=human-resources"
		}
	},
	{
		icon: Workhub.src,
		title: "E3OS WorkHub",
		description: "Automate repetitive tasks and approvals across your entire business.",
		fullDescription: "E3OS WorkHub is a centralized collaboration and productivity platform that brings together task management, team communication, project tracking, and document sharing in one intuitive workspace. It enhances team coordination, improves accountability, and provides real-time visibility into work progress across departments and locations. Designed for modern organizations, E3OS WorkHub boosts productivity, supports remote and hybrid teams, and drives seamless execution of daily operations and projects.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=workhub"
		}
	},
	{
		icon: Audit.src,
		title: "E3OS Audit & Compliance",
		description: "Keep quality, compliance, and inspection readiness always visible.",
		fullDescription:
			"E3OS Audit and Compliance is a specialized solution built to simplify internal auditing, risk management, regulatory compliance tracking, and corrective action management. It provides a centralized platform for scheduling audits, documenting findings, tracking remediation, and generating compliance reports with full audit trails. Ideal for organizations in regulated industries, E3OS Audit and Compliance strengthens governance, reduces compliance risks, and builds stakeholder confidence through transparency and accountability.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=audit-compliance"
		}
	},
	{
		icon: Assets.src,
		title: "E3OS Assets Management",
		description: "Track every asset, usage, and lifecycle from one dashboard.",
		fullDescription:
			"E3OS Asset Management delivers intelligent tracking and maintenance of physical assets throughout their lifecycle. The system offers real-time asset visibility, preventive and predictive maintenance scheduling, depreciation tracking, and performance analytics to maximize asset utilization and minimize downtime. Organizations benefit from reduced maintenance costs, extended asset life, and better capital planning decisions across facilities, equipment, and fleet operations.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=assets-management"
		}
	},
	{
		icon: Finance.src,
		title: "E3OS Finance",
		description: "Record, manage, monitor budgets, invoices, and approvals.",
		fullDescription:
			"E3OS Finance is a robust financial management system that provides complete control over accounting, budgeting, invoicing, expense tracking, and financial reporting. With real-time visibility, automated reconciliations, and multi-currency support, it helps organizations maintain financial accuracy, improve cash flow management, and ensure compliance with regulatory standards. E3OS Finance empowers finance teams to make data-driven decisions while reducing manual work and financial risks.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=finance"
		}
	},
	{
		icon: Procurement.src,
		title: "E3OS Procurement",
		description: "Manage procurement processes, track orders, and optimize supplier relationships.",
		fullDescription:
			"E3OS Procurement is a comprehensive procurement management system that automates the full sourcing-to-payment cycle, including supplier management, tendering, purchase requisitions, order processing, and vendor performance evaluation. It ensures transparency, cost control, and regulatory compliance while reducing procurement cycle time. With strong supplier relationship tools and analytics, E3OS Procurement helps organizations achieve significant savings and build more reliable supply chains.",
		modalVariant: "e3os",
		primaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=procurement"
		}
	},
	{
		icon: CMVP.src,
		title: "CMVP",
		description: "Stay legally aligned and inspection ready.",
		fullDescription: "CMPV (www.cmvp.net) is a comprehensive certificate management and verification system designed to support organizations in managing their certificates and records. Our platform provides a secure and reliable way to issue, verify, and manage certificates, protecting brands' identities and preventing certificate forgery. ",
		modalVariant: "pro",
		primaryAction: {
			label: "View Website",
			href: "https://cmvp.net"
		},
		secondaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=cmvp"
		}
	},
	{
		icon: Prolearn.src,
		title: "PRO LEARN",
		fullDescription:
			"PRO-LEARN is a comprehensive Learning Management System (LMS) designed to support institutions, learners, and education systems in achieving their academic goals. Our platform provides a range of tools and features to enhance the learning experience, improve student outcomes, and streamline administrative tasks.",
		description: "Train your team, track progress, and ensure compliance with our Learning Management System.",
		modalVariant: "pro",
		primaryAction: {
			label: "View Details",
			href: "/files/PRO_Learn.pdf"
		},
		secondaryAction: {
			label: "Book a Demo",
			href: "/request-quote?product=pro-learn"
		}
	}
];

const PARTNERS = [Proliance.src, E3OS.src];

const TESTIMONIALS = [
	{
		avatar: Patience.src,
		name: "Patience",
		role: "Finance",
		quote: "A reliable solution that has improved efficiency and reporting across our finance operations."
	},
	{
		avatar: Daniel.src,
		name: "Daniel",
		role: "Training",
		quote: "Simple, effective, and exactly what we needed to manage our training activities."
	},
	{
		avatar: Tonna.src,
		name: "Tonna",
		role: "Project Manager",
		quote: "An excellent platform for tracking progress and keeping teams aligned."
	},
	{
		avatar: Victory.src,
		name: "Victory",
		role: "HR Manager",
		quote: "It has made workforce management more organized and significantly easier."
	}
];

const FAQS = [
	{
		question: "How do I get started with PBTL?",
		answer:
			"Contact our team through the website form, email, or phone. We will schedule a consultation to understand your needs and propose the right solution."
	},
	{
		question: "What is your approach to data security and compliance?",
		answer: "We integrate robust cybersecurity measures, regulatory compliance tools, and secure data management practices into all our solutions."
	},
	{
		question: "Are your solutions customizable?",
		answer: "Yes. We tailor our solutions to meet specific industry requirements, compliance standards, and unique business needs."
	},
	{
		question: "Do you offer solutions for HR and recruitment?",
		answer: "Yes. Our E3OS-HR and E3OS-Recruitment systems help organizations manage workforce processes, rostering, compliance, and talent acquisition more effectively."
	},
	{
		question: "How can PBTL help my business?",
		answer: "We design and implement scalable technology solutions that streamline operations, enhance decision-making, reduce risks, and drive long-term business growth."
	}
];

const E3OS_HIGHLIGHTS = [
	{
		title: "Simplified Processes",
		description: "Streamline your workflows and keep everything running smoothly from start to finish",
		tone: "dark",
		icon: "cube"
	},
	{
		title: "Work Smarter",
		description: "Simplify daily tasks with smart automation and save time",
		tone: "soft",
		icon: "bulb"
	},
	{
		title: "Built for Compliance",
		description: "Stay accurate, organized, and in control at all times",
		tone: "light",
		icon: "thumb"
	},
	{
		title: "Grows With You",
		description: "Scale your business without the chaos",
		tone: "accent",
		icon: "chart"
	}
] as const;

function HighlightIcon({ type }: { type: "cube" | "bulb" | "thumb" | "chart" }) {
	if (type === "cube") {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
				<path d="M12 3v9m0 0 7.5-4.8M12 12 4.5 7.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
			</svg>
		);
	}

	if (type === "bulb") {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="M8.5 14a5 5 0 1 1 7 0c-.7.6-1.2 1.4-1.3 2.2h-4.4c-.1-.8-.6-1.6-1.3-2.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
				<path d="M9.5 19h5m-4 2h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</svg>
		);
	}

	if (type === "thumb") {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path d="M10 10.5 13.5 5a1.8 1.8 0 0 1 3.2 1.2l-.5 4.3h3a2 2 0 0 1 2 2.3l-1 5.5A2 2 0 0 1 18.2 20H10m0-9.5H6a1.5 1.5 0 0 0-1.5 1.5v6A1.5 1.5 0 0 0 6 19.5h4v-9Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
			</svg>
		);
	}

	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M5 19.5h14M7.5 16V9.5m4.5 6.5V6.5m4.5 9.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			<rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
		</svg>
	);
}

function HomePage() {
	const [activeSolution, setActiveSolution] = useState<SolutionItem | null>(null);
	const [activeFaqIndex, setActiveFaqIndex] = useState(0);

	useEffect(() => {
		if (!activeSolution) {
			return;
		}

		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setActiveSolution(null);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);

		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [activeSolution]);

	const closeModal = () => setActiveSolution(null);
	const isProModal = activeSolution?.modalVariant === "pro";
	const modalLines = activeSolution?.fullDescription
		? activeSolution.fullDescription.split(". ").map((sentence) => (sentence.endsWith(".") ? sentence : `${sentence}.`))
		: activeSolution
			? [activeSolution.description]
			: [];

	return (
		<div className="site-home">
			<section id="home" className="site-hero" aria-label="PBTL hero section" data-reveal="zoom">
				<div className="site-hero-bg" />
				<div className="container site-hero-content">
					<div className="site-hero-image-wrap" data-reveal="left" data-reveal-delay="500">
						<img src={HERO_BG.src} alt="Connected technology graphic" className="site-hero-image" />
					</div>
					<div className="site-hero-copy" data-reveal="right" data-reveal-delay="600">
						<h1>Your Business Technology Partner</h1>
						<div className="site-hero-actions">
							<Link href="/#product" className="site-primary-btn">
								Explore Products
							</Link>
							<Link href="/industries" className="site-secondary-btn">
								Explore Industries
							</Link>
						</div>
					</div>
				</div>
			</section>

			<section className="site-solutions" id="industries" data-reveal>
				<div className="container">
					<div id="product" className="site-section-title-wrap" data-reveal data-reveal-delay="450">
						<h2>Empowering Enterprises with Intelligent Solutions</h2>
						<p>
							Our business technology services are designed to help businesses streamline
							operations, improve efficiency, and drive growth.
						</p>
					</div>
					<div className="site-cards-grid">
						{SOLUTIONS.map((solution, index) => (
							<button
								type="button"
								key={solution.title}
								className="solution-card solution-card-button"
								data-reveal="zoom"
								data-reveal-delay={String(450 + (index % 4) * 80)}
								onClick={() => setActiveSolution(solution)}
								aria-label={`Open ${solution.title} details`}
							>
								<img src={solution.icon} alt={`${solution.title} icon`} className="solution-icon" />
								<h3>{solution.title}</h3>
								<p>{solution.description}</p>
							</button>
						))}
					</div>
				</div>
			</section>

			{activeSolution && (
				<div className="site-solution-modal-backdrop" onClick={closeModal} role="presentation">
					<div
						className="site-solution-modal"
						onClick={(event) => event.stopPropagation()}
						role="dialog"
						aria-modal="true"
						aria-label={`${activeSolution.title} details`}
					>
						<button
							type="button"
							className="site-solution-modal-close"
							onClick={closeModal}
							aria-label="Close modal"
						>
							x
						</button>

						<div className={`site-solution-modal-art ${isProModal ? "site-solution-modal-art-pro" : "site-solution-modal-art-e3os"}`}>
							<div className="site-solution-modal-art-shape">
								<img src={activeSolution.icon} alt="" aria-hidden="true" className="site-solution-modal-icon" />
							</div>
						</div>

						<div className="site-solution-modal-content">
							<h3>{activeSolution.title}</h3>
							<div className="site-solution-modal-divider" />
							<div className="site-solution-modal-text">
								{modalLines.map((line, idx) => (
									<p key={`${activeSolution.title}-${idx}`}>{line}</p>
								))}
							</div>
							<div className="site-solution-modal-actions">
								<Link
									href={activeSolution.primaryAction.href}
									className="site-solution-modal-btn site-solution-modal-btn-primary"
									onClick={closeModal}
								>
									{activeSolution.primaryAction.label}
								</Link>
								{activeSolution.secondaryAction && (
									<Link
										href={activeSolution.secondaryAction.href}
										className="site-solution-modal-btn site-solution-modal-btn-secondary"
										onClick={closeModal}
									>
										{activeSolution.secondaryAction.label}
									</Link>
								)}
							</div>
						</div>
					</div>
				</div>
			)}

			<section className="site-partners" aria-label="Our partners" data-reveal>
				<div className="container">
					<h2 data-reveal="left">Our Partners</h2>
					<div className="partner-row">
						{PARTNERS.map((partner, index) => (
							<span
								key={partner}
								className="partner-pill"
								data-reveal="zoom"
								data-reveal-delay={String(400 + (index % 6) * 70)}
							>
								<img src={partner} width={150} alt="Partner logo" className="partner-logo" />
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="site-e3os-showcase" aria-label="E3OS value highlights" data-reveal>
				<div className="container">
					<div className="site-e3os-heading" data-reveal data-reveal-delay="500">
						<h2>E3OS by PBTL</h2>
						<p>
							An all-in-one ERP platform designed for organisations that need smarter
							control over their workforce and care management
						</p>
					</div>
				</div>
				<div className="site-e3os-grid" data-reveal="zoom" data-reveal-delay="560">
					{E3OS_HIGHLIGHTS.map((item, index) => (
						<article
							key={item.title}
							className={`site-e3os-card site-e3os-card-${item.tone}`}
							data-reveal="zoom"
							data-reveal-delay={String(500 + index * 85)}
						>
							<span className="site-e3os-icon">
								<HighlightIcon type={item.icon} />
							</span>
							<h3>{item.title}</h3>
							<p>{item.description}</p>
						</article>
					))}
				</div>
			</section>

			<section className="site-e3os-cta" aria-label="Book an E3OS demo" data-reveal>
				<div className="container site-e3os-cta-content" data-reveal="zoom" data-reveal-delay="620">
					<h2>Experience Smarter Workforce &amp; Care Management</h2>
					<p>
						Book a personalized e3OS demo and see how one integrated platform can simplify
						operations, empower your teams, and enhance care delivery across your
						organization.
					</p>
					<Link href="/request-quote" className="site-e3os-cta-btn">
						Request a Demo
					</Link>
				</div>
			</section>

			<section className="site-testimonials" aria-label="Our testimonials" data-reveal>
				<div className="container">
					<h2 data-reveal="left">Our Testimonials</h2>
					<p className="testimonials-subtitle" data-reveal data-reveal-delay="450">
						Hear what people are saying about PBTL and our products.
					</p>
					<div className="testimonial-sec">
						{TESTIMONIALS.map((item, index) => (
							<article
								key={item.name}
								className="testimonial-card"
								data-reveal="zoom"
								data-reveal-delay={String(500 + index * 85)}
							>
								<img src={item.avatar} alt={`${item.name} profile picture`} className="testimonial-image" />
								<p>{item.quote}</p>
								<strong>{item.name}</strong>
								<span>{item.role}</span>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="site-faqs" aria-label="Frequently asked questions" data-reveal>
				<div className="container faq-wrap">
					<h2 data-reveal="left">FAQs</h2>
					{FAQS.map((faq, index) => (
						<details
							key={faq.question}
							open={activeFaqIndex === index}
							className="faq-item"
							data-reveal="right"
							data-reveal-delay={String(450 + index * 80)}
						>
							<summary
								onClick={(event) => {
									event.preventDefault();
									setActiveFaqIndex((current) => (current === index ? -1 : index));
								}}
							>
								{faq.question}
							</summary>
							<p>{faq.answer}</p>
						</details>
					))}
				</div>
			</section>
		</div>
	);
}

export default HomePage;
