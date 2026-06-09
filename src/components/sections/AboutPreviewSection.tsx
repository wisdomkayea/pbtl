import Link from "next/link";
import Section from "../common/Section";

function AboutPreviewSection() {
	return (
		<Section>
			<div className="container">
				<h2>About PBTL</h2>
				<p>
					This starter includes a dedicated About page so your company story, mission, and values
					can scale as content grows.
				</p>
				<Link href="/about" className="text-link">
					Learn more
				</Link>
			</div>
		</Section>
	);
}

export default AboutPreviewSection;
