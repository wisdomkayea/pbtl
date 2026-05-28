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
		avatar: "https://randomuser.me/api/portraits/women/1.jpg",
		name: "Pamela M.",
		role: "UX Designer",
		quote:
			"From onboarding to daily operations, the platform adapts perfectly to our workflow."
	},
	{
		avatar: "https://randomuser.me/api/portraits/men/2.jpg",
		name: "Precious N.",
		role: "Engineer",
		quote: "The recruitment and HR modules have reduced our admin overhead significantly."
	},
	{
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		name: "Philip D.",
		role: "Operations",
		quote: "Visibility across teams improved from week one. The tools are practical and fast."
	},
	{
		avatar: "https://randomuser.me/api/portraits/women/4.jpg",
		name: "Pamela B.",
		role: "HR Manager",
		quote: "Everything we need for people operations is now in one clean, connected place."
	},
	{
		avatar: "https://randomuser.me/api/portraits/men/5.jpg",
		name: "John S.",
		role: "Developer",
		quote: "The platform has streamlined our development process and improved collaboration."
	},
	{
		avatar: "https://randomuser.me/api/portraits/women/6.jpg",
		name: "Alice M.",
		role: "Product Manager",
		quote: "The platform has significantly improved our product management processes."
	}
];

const FAQS = [
	{
		question: "What is PBTL?",
		answer:
			"PBTL delivers enterprise business technology solutions designed to optimize operations and support sustainable growth."
	},
	{
		question: "Who can use the E3OS platform?",
		answer: "Healthcare, finance, operations, and people teams can all use E3OS modules."
	},
	{
		question: "Can modules be deployed independently?",
		answer: "Yes. You can implement one module at a time or roll out the full suite."
	},
	{
		question: "Do you provide onboarding support?",
		answer: "Yes. We provide guided onboarding, product training, and ongoing support."
	},
	{
		question: "How do I request a demo?",
		answer: "Use the Request a Quote action in the navbar or contact page to get started."
	}
];

function HomePage() {
	return (
		<div className="site-home">
			<section className="site-hero" aria-label="PBTL hero section">
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
