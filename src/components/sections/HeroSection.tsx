import { Link } from "react-router-dom";
import { COMPANY_NAME } from "../../lib/constants";
import Section from "../common/Section";

function HeroSection() {
	return (
		<Section className="hero-section">
			<div className="container">
				<h1>{`${COMPANY_NAME} Company Landing Page`}</h1>
				<p>
					Boilerplate structure for a scalable company website with dedicated pages and reusable
					sections.
				</p>
				<div className="hero-actions">
					<Link to="/contact" className="btn btn-link">
						Contact Us
					</Link>
				</div>
			</div>
		</Section>
	);
}

export default HeroSection;
