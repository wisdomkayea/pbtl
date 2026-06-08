import HERO_BG from	"../../assets/images/hero_img.png";
import Care from "../../assets/images/Care Admin Icon.png";
import Recruitment from "../../assets/images/Recruitment Icon.png";
import Document from "../../assets/images/DMS.png";
import HumanResources from "../../assets/images/Hr 1.png";
import Workflow from "../../assets/images/Workhub.png";
import Audit  from "../../assets/images/Audit-Compiance 1.png";
import Assets  from "../../assets/images/Assetsmanagement 1.png";
import Finance  from "../../assets/images/Finance.png";
import Procurement  from "../../assets/images/Procurement.png";
import CMVP  from "../../assets/images/Audit-Compiance 1.png";
import Proliance from "../../assets/images/proliance.png";
import E3OS from "../../assets/images/E3OS.png";
import Tonna from "../../assets/images/tonna.jpeg";
import Patience from "../../assets/images/patience.jpeg";
import Daniel from "../../assets/images/daniel.png";
import Victory from "../../assets/images/victory.jpeg";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./HomePage.css";
import { Link } from "react-router-dom";


const SOLUTIONS = [
	{
		icon: Care,
		title: "E3OS Care Administrator",
		description: "Stay in control of care delivery, team coordination, and daily operations based on compliance."
	},
	{
		icon: Recruitment,
		title: "E3OS Recruitment",
		description: "From applications to onboarding, manage your hiring in one place."
	},
	{
		icon: Document,
		title: "PRO DMS",
		description: "Organize your documents, stay compliant, and work with confidence."
	},
	{
		icon: HumanResources,
		title: "E3OS Human Resources",
		description: "Manage your team in one place with workflows for daily HR tasks."
	},
	{
		icon: Workflow,
		title: "E3OS WorkHub",
		description: "Automate repetitive tasks and approvals across your entire business."
	},
	{
		icon: Audit,
		title: "E3OS Audit & Compliance",
		description: "Keep quality, compliance, and inspection readiness always visible."
	},
	{
		icon: Assets,
		title: "E3OS Assets Management",
		description: "Track every asset, usage, and lifecycle from one dashboard."
	},
	{
		icon: Finance,
		title: "E3OS Finance",
		description: "Record, manage, monitor budgets, invoices, and approvals."
	},
	{
		icon: Procurement,
		title: "E3OS Procurement",
		description: "Manage procurement processes, track orders, and optimize supplier relationships."
	},
	{
		icon: CMVP,
		title: "CMVP",
		description: "Stay legally aligned and inspection ready"
	},
	{
		icon: Workflow,
		title: "PRO Learn",
		description: "Train your team, track progress, and ensure compliance with our Learning Management System."
	}
];

const PARTNERS = [
	Proliance,
	E3OS,
	// Sobaz, 
	// Aradel, 
	// Seplat, 
	// CenGlobal, 
	// Asca, 
	// FlowGrid, 
	// Gmt,
	// Fn
];

const TESTIMONIALS = [
	{
		avatar: Patience,
		name: "Patience",
		role: "Finance",
		quote:
			"Represents E3OS Finance and other Unified Experiences."
	},
	{
		avatar: Daniel,
		name: "Daniel",
		role: "Training",
		quote: "Represents LMS and its Functions"
	},
	{
		avatar: Tonna,
		name: "Tonna",
		role: "Project Manager",
		quote: "Represents E3OS and Its Processes"
	},
	{
		avatar: Victory,
		name: "Victory",
		role: "HR Manager",
		quote: "Represents CMVP and all record"
	},
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
	useScrollReveal();
	return (
		<div className="site-home">
			<section id="home" className="site-hero" aria-label="PBTL hero section" data-reveal="zoom">
				<div
					className="site-hero-bg"
				/>
				<div className="container site-hero-content">
					<div className="site-hero-image-wrap" data-reveal="left" data-reveal-delay="400">
						<img src={HERO_BG} alt="Connected technology graphic" className="site-hero-image" />
					</div>
					<div className="site-hero-copy" data-reveal="right" data-reveal-delay="400">
						<h1>Your Business Technology Partner</h1>
						<div className="site-hero-actions">
							<button type="button" className="site-primary-btn">
								<Link to="#product">Explore Products</Link>
							</button>
							<button type="button" className="site-secondary-btn">
								<Link to="/industries">Explore Industries</Link>
							</button>
							{/* <button type="button" className="site-tertiary-btn" aria-label="Download brochure">
								<FolderDownloadIcon size={20} />
							</button> */}
						</div>
					</div>
				</div>
			</section>

			<section className="site-solutions" id="industries" data-reveal>
				<div className="container">
					<div id="product" className="site-section-title-wrap" data-reveal data-reveal-delay="40">
						<h2>Empowering Enterprises with Intelligent Solutions</h2>
						<p>
							Our business technology services are designed to help businesses streamline
							operations, improve efficiency, and drive growth.
						</p>
					</div>
					<div className="site-cards-grid">
						{SOLUTIONS.map((solution, index) => (
							<article
								key={solution.title}
								className="solution-card"
								data-reveal="zoom"
								data-reveal-delay={String(50 + (index % 4) * 70)}
							>
								<img src={solution.icon} alt={`${solution.title} icon`} className="solution-icon" />
								<h3>{solution.title}</h3>
								<p>{solution.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="site-partners" aria-label="Our partners" data-reveal>
				<div className="container">
					<h2 data-reveal="left">Our Partners</h2>
					<div className="partner-row">
						{PARTNERS.map((partner, index) => (
							<span
								key={partner}
								className="partner-pill"
								data-reveal="zoom"
								data-reveal-delay={String(20 + (index % 6) * 60)}
							>
								<img src={partner} width={150} alt="Partner logo" className="partner-logo" />
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="site-e3os-showcase" aria-label="E3OS value highlights" data-reveal>
				<div className="container">
					<div className="site-e3os-heading" data-reveal data-reveal-delay="40">
						<h2>E3OS by PBTL</h2>
						<p>
							An all-in-one ERP platform designed for organisations that need smarter
							control over their workforce and care management
						</p>
					</div>
				</div>
				<div className="site-e3os-grid" data-reveal="zoom" data-reveal-delay="70">
					{E3OS_HIGHLIGHTS.map((item, index) => (
						<article
							key={item.title}
							className={`site-e3os-card site-e3os-card-${item.tone}`}
							data-reveal="zoom"
							data-reveal-delay={String(40 + index * 60)}
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
				<div className="container site-e3os-cta-content" data-reveal="zoom" data-reveal-delay="40">
					<h2>Experience Smarter Workforce &amp; Care Management</h2>
					<p>
						Book a personalized e3OS demo and see how one integrated platform can simplify
						operations, empower your teams, and enhance care delivery across your
						organization.
					</p>
					<Link to="/request-quote" className="site-e3os-cta-btn">
						Request For Demo
					</Link>
				</div>
			</section>

			<section className="site-testimonials" aria-label="Our testimonials" data-reveal>
				<div className="container">
					<h2 data-reveal="left">Our Testimonials</h2>
					<p className="testimonials-subtitle" data-reveal data-reveal-delay="50">Hear what people are saying about PBTL and our products.</p>
					<div className="testimonial-sec">
						{TESTIMONIALS.map((item, index) => (
							<article key={item.name} className="testimonial-card" data-reveal="zoom" data-reveal-delay={String(60 + index * 80)}>
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
							open={index === 0}
							className="faq-item"
							data-reveal="right"
							data-reveal-delay={String(50 + index * 70)}
						>
							<summary>{faq.question}</summary>
							<p>{faq.answer}</p>
						</details>
					))}
				</div>
			</section>
		</div>
	);
}

export default HomePage;
