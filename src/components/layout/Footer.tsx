import { NavLink, useLocation } from "react-router-dom";
import { COMPANY_NAME } from "../../lib/constants";
import CompanyLogoBlack from "../../assets/images/logo_black.png";

function Footer() {
	const location = useLocation();
	const isAboutPage = location.pathname === "/about";
	const isContactPage = location.pathname === "/contact";
	const isSolutionPage = location.pathname === "/solutions";

	return (
		<footer
			className={`site-footer ${isAboutPage || isContactPage ? "about-bridge-footer" : ""}`}
		>
			<div className="container footer-content footer-content-extended">
				<NavLink
					to="/"
					className={`brand-mark site-brand footer-brand ${isAboutPage ? "about-bridge-brand" : ""}`}
					aria-label={`${COMPANY_NAME} home`}
				>
					<img src={CompanyLogoBlack} alt={`${COMPANY_NAME} logo`} className="footer-logo" />
				</NavLink>

				<nav aria-label="Footer navigation" className="footer-nav">
					<ul className="nav-list footer-nav-list">
						<li>
							<NavLink to="/industries" className="footer-nav-link">
								Industries
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className="footer-nav-link">
								Contact
							</NavLink>
						</li>
						<li>
							<NavLink to="/about" className="footer-nav-link">
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink to="/privacy-policy" className="footer-nav-link">
								Privacy Policy
							</NavLink>
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
