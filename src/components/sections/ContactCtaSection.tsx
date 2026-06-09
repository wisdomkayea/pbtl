import Link from "next/link";
import Section from "../common/Section";

function ContactCtaSection() {
	return (
		<Section className="contact-cta-section">
			<div className="container">
				<h2>Need to reach us?</h2>
				<p>Use the contact page boilerplate and plug in your company channels when ready.</p>
				<Link href="/contact" className="btn btn-link">
					Go to Contact Us
				</Link>
			</div>
		</Section>
	);
}

export default ContactCtaSection;
