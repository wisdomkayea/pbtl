import type { Metadata } from "next";
import type { ReactNode } from "react";
import MainLayout from "../components/layout/MainLayout";
import "../index.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://proliancetechnologies.com";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: "PBTL - Technology, Business Process, Cloud",
		template: "%s | PBTL"
	},
	description:
		"PBTL delivers business technology solutions across process automation, cloud, compliance, workforce, and enterprise operations. Your Business Technology Partner.",
	applicationName: "PBTL",
	keywords: [
		"PBTL",
		"Proliance Business Technologies",
		"Your Business Technology Partner",
		"Technology",
		"Business Process",
		"Cloud",
		"ERP",
		"Compliance",
		"Care Rostering",
		"Workforce Management",
		"Digital Transformation"
	],
	icons: {
		icon: "/images/logo_white.png",
		apple: "/images/logo_white.png"
	},
	openGraph: {
		title: "PBTL - Technology, Business Process, Cloud",
		description:
			"PBTL delivers business technology solutions across process automation, cloud, compliance, workforce, and enterprise operations.",
		type: "website",
		images: [
			{
				url: "/images/logo_white.png",
				alt: "PBTL logo"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "PBTL - Technology, Business Process, Cloud",
		description:
			"Your Business Technology Partner for technology, business process, and cloud solutions.",
		images: ["/images/logo_white.png"]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1
		}
	}
};

const structuredData = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			name: "PBTL",
			alternateName: "Proliance Business Technologies Limited",
			slogan: "Your Business Technology Partner",
			description:
				"Technology, business process, and cloud solutions for modern enterprises.",
			logo: "/images/logo_white.png"
		},
		{
			"@type": "WebSite",
			name: "PBTL",
			alternateName: "Proliance Business Technologies Limited",
			description:
				"Your Business Technology Partner for digital transformation, compliance, and enterprise operations."
		}
	]
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
