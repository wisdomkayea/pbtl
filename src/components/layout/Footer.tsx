"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_NAME } from "../../lib/constants";
import CompanyLogoBlack from "../../assets/images/logo_black.png";

function Footer() {
	const pathname = usePathname();
	const isAboutPage = pathname === "/about";
	const isContactPage = pathname === "/contact";

	return (
		<footer
			className={`site-footer ${isAboutPage || isContactPage ? "about-bridge-footer" : ""}`}
		>
			<div className="container footer-content footer-content-extended">
				<Link
					href="/"
					className={`brand-mark site-brand footer-brand ${isAboutPage ? "about-bridge-brand" : ""}`}
					aria-label={`${COMPANY_NAME} home`}
				>
					<img src={CompanyLogoBlack.src} alt={`${COMPANY_NAME} logo`} className="footer-logo" />
				</Link>

				<nav aria-label="Footer navigation" className="footer-nav">
					<ul className="nav-list footer-nav-list">
						<li>
							<Link href="/solutions" className="footer-nav-link">
								Solutions
							</Link>
						</li>
						<li>
							<Link href="/industries" className="footer-nav-link">
								Industries
							</Link>
						</li>
						<li>
							<Link href="/contact" className="footer-nav-link">
								Contact
							</Link>
						</li>
						<li>
							<Link href="/about" className="footer-nav-link">
								About Us
							</Link>
						</li>
						<li>
							<Link href="/privacy-policy" className="footer-nav-link">
								Privacy Policy
							</Link>
						</li>
					</ul>
				</nav>

				<p className="footer-copyright">
					{`Copyright © ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved`}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
