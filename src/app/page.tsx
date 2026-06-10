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
		quote: "A reliable solution that has improved efficiency and reporting across our finance operations through E3OS Finance."
	},
	{
		avatar: Daniel.src,
		name: "Daniel",
		role: "Training",
		quote: "Training administration has become simpler and more effective with PRO Learn, making it easier to deliver quality learning experiences."
	},
	{
		avatar: Tonna.src,
		name: "Tonna",
		role: "Project Manager",
		quote: "Tracking progress and keeping teams aligned has never been easier thanks to E3OS WorkHub."
	},
	{
		avatar: Victory.src,
		name: "Victory",
		role: "HR Manager",
		quote: "Workforce management is now more organized and efficient with E3OS Human Resources, saving valuable time every day."
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
		title: "Scale With You",
		description: "Scale your business without the chaos",
		tone: "accent",
		icon: "chart"
	}
] as const;

function HighlightIcon({ type }: { type: "cube" | "bulb" | "thumb" | "chart" }) {
	if (type === "cube") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
				<path d="M19.9999 36.6667C20.4071 36.6667 20.7856 36.4782 21.5427 36.1014L27.6276 33.0721C30.3203 31.7316 31.6666 31.0614 31.6666 30V16.6667M19.9999 36.6667C19.5927 36.6667 19.2142 36.4782 18.4572 36.1014L12.3722 33.0721C9.67957 31.7316 8.33325 31.0614 8.33325 30V16.6667M19.9999 36.6667V23.3333M8.33325 16.6667C8.33325 17.728 9.67957 18.3983 12.3722 19.7387L18.4572 22.768C19.2142 23.1449 19.5927 23.3333 19.9999 23.3333C20.4071 23.3333 20.7856 23.1449 21.5427 22.768L27.6276 19.7387C30.3203 18.3983 31.6666 17.728 31.6666 16.6667C31.6666 15.6053 30.3203 14.9351 27.6276 13.5946L21.5427 10.5653C20.7856 10.1884 20.4071 10 19.9999 10C19.5927 10 19.2142 10.1884 18.4572 10.5653L12.3722 13.5946C9.67957 14.9351 8.33325 15.6053 8.33325 16.6667Z" stroke="#FCD9BD" strokeWidth="1.5" strokeLinejoin="round"/>
				<path opacity="0.4" d="M36.6667 35.0002L31.6667 30.8335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				<path opacity="0.4" d="M20 3.3335V10.0002" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				<path opacity="0.4" d="M3.33325 35.0002L8.33325 30.8335" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		);
	}

	if (type === "bulb") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
				<path d="M8.57151 23.3335C7.36233 21.3471 6.66675 19.0198 6.66675 16.5316C6.66675 9.24249 12.6363 3.3335 20.0001 3.3335C27.3639 3.3335 33.3334 9.24249 33.3334 16.5316C33.3334 19.0198 32.6378 21.3471 31.4287 23.3335" stroke="#9E371A" strokeWidth="1.5" strokeLinecap="round"/>
				<path opacity="0.4" d="M16.6666 16.6665C17.6874 17.7385 18.8147 18.3332 19.9999 18.3332C21.1851 18.3332 22.3125 17.7385 23.3333 16.6665M19.9999 18.3332L19.9999 25.8332M24.9999 31.6665L24.7844 32.7442C24.5487 33.9226 24.4309 34.5118 24.1668 34.9775C23.7585 35.6974 23.097 36.2397 22.3109 36.4989C21.8026 36.6665 21.2017 36.6665 19.9999 36.6665C18.7982 36.6665 18.1973 36.6665 17.6889 36.4989C16.9028 36.2397 16.2413 35.6974 15.833 34.9775C15.569 34.5118 15.4511 33.9226 15.2155 32.7442L14.9999 31.6665M16.6864 31.6665H23.3135C24.2083 31.6665 24.6558 31.6665 25.0509 31.5678C25.8785 31.361 26.5952 30.8426 27.0524 30.1199C27.2707 29.7749 27.4122 29.3489 27.6951 28.4969C27.8482 28.0359 27.9248 27.8054 27.9159 27.6186C27.897 27.2236 27.648 26.8769 27.2806 26.7341C27.1069 26.6665 26.8648 26.6665 26.3806 26.6665H13.6192C13.135 26.6665 12.8929 26.6665 12.7192 26.7341C12.3518 26.8769 12.1028 27.2236 12.084 27.6186C12.075 27.8054 12.1516 28.0359 12.3047 28.4969C12.5877 29.3489 12.7292 29.7749 12.9474 30.1199C13.4046 30.8426 14.1213 31.361 14.949 31.5678C15.3441 31.6665 15.7915 31.6665 16.6864 31.6665Z" stroke="#9E371A" strokeWidth="1.5" strokeLinecap="round"/>
			</svg>
		);
	}

	if (type === "thumb") {
		return (
			<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
				<path opacity="0.4" d="M3.33325 20.8333C3.33325 18.9924 4.82564 17.5 6.66659 17.5C9.42801 17.5 11.6666 19.7386 11.6666 22.5V29.1667C11.6666 31.9281 9.42801 34.1667 6.66659 34.1667C4.82564 34.1667 3.33325 32.6743 3.33325 30.8333V20.8333Z" stroke="#BD4624" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M25.798 13.0106L25.3542 14.4441C24.9905 15.6187 24.8086 16.206 24.9485 16.6698C25.0616 17.0451 25.31 17.3685 25.6484 17.5813C26.0668 17.8444 26.6996 17.8444 27.9653 17.8444H28.6386C32.922 17.8444 35.0637 17.8444 36.0753 19.1123C36.191 19.2572 36.2938 19.4113 36.3827 19.5729C37.1609 20.9871 36.2762 22.892 34.5067 26.702C32.8829 30.1983 32.071 31.9465 30.5635 32.9754C30.4175 33.075 30.2675 33.169 30.1139 33.2571C28.5268 34.1668 26.5604 34.1668 22.6274 34.1668H21.7744C17.0096 34.1668 14.6272 34.1668 13.147 32.7326C11.6667 31.2984 11.6667 28.9901 11.6667 24.3734V22.7507C11.6667 20.3246 11.6667 19.1115 12.0973 18.0012C12.5279 16.8908 13.3523 15.9779 15.0012 14.152L21.8203 6.6011C21.9913 6.41173 22.0768 6.31702 22.1522 6.25141C22.856 5.63896 23.9421 5.7079 24.5574 6.40407C24.6233 6.47865 24.6954 6.58335 24.8394 6.79272C25.0648 7.12024 25.1775 7.284 25.2757 7.44625C26.1548 8.89871 26.4208 10.6241 26.0181 12.2621C25.9731 12.445 25.9147 12.6337 25.798 13.0106Z" fill="#FFCEC0" stroke="#BD4624" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		);
	}

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
			<path d="M11.4111 29.1668V25.8335V29.1668Z" fill="white"/>
			<path d="M11.4111 29.1668V25.8335" stroke="#FFCEC0" strokeWidth="1.5" strokeLinecap="round"/>
			<path d="M20 30V25" stroke="#FFCEC0" strokeWidth="1.5" strokeLinecap="round"/>
			<path d="M28.3333 29.9998V21.6665" stroke="#FFCEC0" strokeWidth="1.5" strokeLinecap="round"/>
			<path d="M4.16675 19.9998C4.16675 12.5359 4.16675 8.80399 6.48548 6.48524C8.80423 4.1665 12.5362 4.1665 20.0001 4.1665C27.4639 4.1665 31.1959 4.1665 33.5147 6.48524C35.8334 8.80399 35.8334 12.5359 35.8334 19.9998C35.8334 27.4637 35.8334 31.1957 33.5147 33.5145C31.1959 35.8332 27.4639 35.8332 20.0001 35.8332C12.5362 35.8332 8.80423 35.8332 6.48548 33.5145C4.16675 31.1957 4.16675 27.4637 4.16675 19.9998Z" stroke="#FFCEC0" strokeWidth="1.5"/>
			<path opacity="0.4" d="M9.96899 19.1626C13.5608 19.2823 21.7055 18.7403 26.3382 11.3877M23.3024 10.4995L26.4283 9.99637C26.8093 9.94785 27.3687 10.2486 27.5062 10.6072L28.3326 13.3379" stroke="#FFCEC0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
							×
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
						Book a personalized E3OS demo and see how one integrated platform can simplify
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
						<div className="testimonial-track">
							<div className="testimonial-group">
								{TESTIMONIALS.map((item, index) => (
									<article
										key={`${item.name}-primary`}
										className="testimonial-card"
									>
										<img src={item.avatar} alt={`${item.name} profile picture`} className="testimonial-image" />
										<p>{item.quote}</p>
										<strong>{item.name}</strong>
										<span>{item.role}</span>
									</article>
								))}
							</div>
							<div className="testimonial-group" aria-hidden="true">
								{TESTIMONIALS.map((item) => (
									<article key={`${item.name}-clone`} className="testimonial-card">
										<img src={item.avatar} alt="" aria-hidden="true" className="testimonial-image" />
										<p>{item.quote}</p>
										<strong>{item.name}</strong>
										<span>{item.role}</span>
									</article>
								))}
							</div>
						</div>
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
