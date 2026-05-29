import { FolderDownloadIcon, HardDriveIcon } from "hugeicons-react";
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
import Sobaz from "../../assets/images/company4.png";
import Aradel from "../../assets/images/company3.png";
import Seplat from "../../assets/images/company2.png";
import CenGlobal from "../../assets/images/company7.png";
import Asca from "../../assets/images/company1.png";
import FlowGrid from "../../assets/images/company5.png";
import Fn from "../../assets/images/company8.png";
import Gmt from "../../assets/images/company6.png";
import Tonna from "../../assets/images/tonna.jpeg";
import Patience from "../../assets/images/patience.jpeg";
import Daniel from "../../assets/images/daniel.png";
import Victory from "../../assets/images/victory.jpeg";
import "./HomePage.css";


const SOLUTIONS = [
	{
		icon: Care,
		title: "E3OS Care Administrator",
		description: "Stay in control of care delivery, team coordination, and daily operations."
	},
	{
		icon: Recruitment,
		title: "E3OS Recruitment",
		description: "From applications to onboarding, manage your hiring in one place."
	},
	{
		icon: Document,
		title: "E3OS Document Management",
		description: "Organize your documents, stay compliant, and work with confidence."
	},
	{
		icon: HumanResources,
		title: "E3OS Human Resources",
		description: "Manage your team in one place with workflows for daily HR tasks."
	},
	{
		icon: Workflow,
		title: "E3OS Workflow",
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
	}
];

const PARTNERS = [
	Sobaz, 
	Aradel, 
	Seplat, 
	CenGlobal, 
	Asca, 
	FlowGrid, 
	Gmt,
	Fn
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

function HomePage() {
	return (
		<div className="site-home">
			<section id="home" className="site-hero" aria-label="PBTL hero section">
				<div
					className="site-hero-bg"
				/>
				<div className="container site-hero-content">
					<div className="site-hero-image-wrap">
						<img src={HERO_BG} alt="Connected technology graphic" className="site-hero-image" />
					</div>
					<div className="site-hero-copy">
						<h1>Your Business Technology Partners</h1>
						<div className="site-hero-actions">
							<button type="button" className="site-primary-btn">
								<a href="#product">Explore Products</a>
							</button>
							<button type="button" className="site-secondary-btn">
								<a href="/industries">Explore Industries</a>
							</button>
							<button type="button" className="site-tertiary-btn" aria-label="Download brochure">
								<FolderDownloadIcon size={20} />
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="site-solutions" id="industries">
				<div className="container">
					<div id="product" className="site-section-title-wrap">
						<h2>Empowering Enterprises with Intelligent Solutions</h2>
						<p>
							Our business technology services are designed to help businesses streamline
							operations, improve efficiency, and drive growth.
						</p>
					</div>
					<div className="site-cards-grid">
						{SOLUTIONS.map((solution) => (
							<article key={solution.title} className="solution-card">
								<img src={solution.icon} alt={`${solution.title} icon`} className="solution-icon" />
								<h3>{solution.title}</h3>
								<p>{solution.description}</p>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="site-partners" aria-label="Our partners">
				<div className="container">
					<h2>Our Partners</h2>
					<div className="partner-row">
						{PARTNERS.map((partner) => (
							<span key={partner} className="partner-pill">
								<img src={partner} alt="Partner logo" className="partner-logo" />
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="site-testimonials" aria-label="Our testimonials">
				<div className="container">
					<h2>Our Testimonials</h2>
					<p className="testimonials-subtitle">Hear what people are saying about PBTL and our products.</p>
					<div className="testimonial-sec">
						{TESTIMONIALS.map((item) => (
							<article key={item.name} className="testimonial-card">
								<img src={item.avatar} alt={`${item.name} profile picture`} className="testimonial-image" />
								<p>{item.quote}</p>
								<strong>{item.name}</strong>
								<span>{item.role}</span>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className="site-faqs" aria-label="Frequently asked questions">
				<div className="container faq-wrap">
					<h2>FAQs</h2>
					{FAQS.map((faq, index) => (
						<details key={faq.question} open={index === 0} className="faq-item">
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
