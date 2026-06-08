import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { COMPANY_NAME } from "../../lib/constants";
import CompanyLogoBlack from "../../assets/images/logo_black.png";
import CompanyLogoWhite from "../../assets/images/logo_white.png";
import HeroSection from "../sections/HeroSection";


function Header() {
	const location = useLocation();
	const isAboutPage = location.pathname === "/about";
	const isCompanySection = location.pathname === "/about" || location.pathname === "/contact";
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCompanyOpen, setIsCompanyOpen] = useState(false);

	useEffect(() => {
		setIsMenuOpen(false);
		setIsCompanyOpen(false);
	}, [location.pathname]);

	return (
		<header className={`site-header site-nav ${isAboutPage ? "about-bridge-header" : ""}`}>
			<div className="container header-content site-nav-content">
				<NavLink
					to="/"
					className={`brand-mark site-brand ${isAboutPage ? "about-bridge-brand" : ""}`}
					aria-label={`${COMPANY_NAME} home`}
				>
					<img
						src={isAboutPage ? CompanyLogoWhite : CompanyLogoBlack}
						alt={`${COMPANY_NAME} logo`}
						className="header-logo"
					/>
				</NavLink>
				<button
					type="button"
					className={`site-mobile-menu-toggle ${isMenuOpen ? "site-mobile-menu-toggle-open" : ""} ${isAboutPage ? "about-bridge-menu-toggle" : ""}`}
					onClick={() => setIsMenuOpen((open) => !open)}
					aria-expanded={isMenuOpen}
					aria-controls="site-primary-navigation"
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					<span className="site-mobile-menu-line" aria-hidden="true" />
					<span className="site-mobile-menu-line" aria-hidden="true" />
					<span className="site-mobile-menu-line" aria-hidden="true" />
				</button>

				<div className={`site-mobile-panel ${isMenuOpen ? "site-mobile-panel-open" : ""}`}>
					<nav
						id="site-primary-navigation"
						aria-label="Main navigation"
						className="site-nav-links-wrap"
					>
						<ul className="nav-list site-nav-list">
							<li>
								<NavLink
									to="/solutions"
									onClick={() => setIsMenuOpen(false)}
									className={({ isActive }) =>
										`nav-link site-nav-link ${isAboutPage ? "about-bridge-nav-link" : ""} ${isActive ? "site-nav-link-active" : ""}`
									}
								>
									Solutions
								</NavLink>
							</li>
								<li>
								<NavLink
									to="/#products"
									onClick={() => setIsMenuOpen(false)}
									className={({ isActive }) =>
										`nav-link site-nav-link ${isAboutPage ? "about-bridge-nav-link" : ""} ${isActive ? "site-nav-link-active" : ""}`
									}
								>
									Products
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/industries"
									onClick={() => setIsMenuOpen(false)}
									className={({ isActive }) =>
										`nav-link site-nav-link ${isAboutPage ? "about-bridge-nav-link" : ""} ${isActive ? "site-nav-link-active" : ""}`
									}
								>
									Industries
								</NavLink>
							</li>
						
							<li className={`site-nav-item-with-submenu ${isCompanyOpen ? "site-nav-item-open" : ""}`}>
									<button
										type="button"
										className={`nav-link site-nav-link site-nav-submenu-trigger ${isAboutPage ? "about-bridge-nav-link" : ""} ${isCompanySection ? "site-nav-link-active" : ""}`}
										onClick={() => setIsCompanyOpen((open) => !open)}
										aria-expanded={isCompanyOpen}
										aria-controls="company-submenu"
									>
										Company
										
									</button>
									<ul
										id="company-submenu"
										className={`site-nav-submenu ${isCompanyOpen ? "site-nav-submenu-open" : ""}`}
									>
										<li>
											<NavLink
												to="/contact"
												onClick={() => {
													setIsMenuOpen(false);
													setIsCompanyOpen(false);
												}}
												className={({ isActive }) =>
													`nav-link site-nav-link site-nav-sublink ${isAboutPage ? "about-bridge-nav-link" : ""} ${isActive ? "site-nav-link-active" : ""}`
												}
											>
												Contact
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/about"
												onClick={() => {
													setIsMenuOpen(false);
													setIsCompanyOpen(false);
												}}
												className={({ isActive }) =>
													`nav-link site-nav-link site-nav-sublink ${isAboutPage ? "about-bridge-nav-link" : ""} ${isActive ? "site-nav-link-active" : ""}`
												}
											>
												About Us
											</NavLink>
										</li>
									</ul>
							</li>
						</ul>
					</nav>

					<NavLink
						to="/request-quote"
						onClick={() => setIsMenuOpen(false)}
						className={`quote-button site-nav-quote ${isAboutPage ? "about-bridge-quote-button" : ""}`}
						aria-label="Request a quote"
					>
						Request for Demo
					</NavLink>
				</div>
			</div>
		</header>
	);
}

export default Header;
