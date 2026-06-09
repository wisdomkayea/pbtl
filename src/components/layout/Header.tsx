"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { COMPANY_NAME } from "../../lib/constants";
import CompanyLogoBlack from "../../assets/images/logo_black.png";
import CompanyLogoWhite from "../../assets/images/logo_white.png";


function Header() {
	const pathname = usePathname();
	const router = useRouter();
	const isAboutPage = pathname === "/about";
	const isCompanySection = pathname === "/about" || pathname === "/contact";
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCompanyOpen, setIsCompanyOpen] = useState(false);

	const getNavClass = (isActive: boolean) =>
		`nav-link site-nav-link ${isAboutPage ? "about-bridge-nav-link" : ""} ${isActive ? "site-nav-link-active" : ""}`;

	useEffect(() => {
		setIsMenuOpen(false);
		setIsCompanyOpen(false);
	}, [pathname]);

	useEffect(() => {
		const routesToPrefetch = ["/", "/solutions", "/industries", "/about", "/contact", "/request-quote", "/privacy-policy"];
		routesToPrefetch.forEach((route) => router.prefetch(route));
	}, [router]);

	return (
		<header className={`site-header site-nav ${isAboutPage ? "about-bridge-header" : ""}`}>
			<div className="container header-content site-nav-content">
				<Link
					href="/"
					className={`brand-mark site-brand ${isAboutPage ? "about-bridge-brand" : ""}`}
					aria-label={`${COMPANY_NAME} home`}
				>
					<img
						src={(isAboutPage ? CompanyLogoWhite : CompanyLogoBlack).src}
						alt={`${COMPANY_NAME} logo`}
						className="header-logo"
					/>
				</Link>
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
								<Link
									href="/solutions"
									onClick={() => setIsMenuOpen(false)}
									className={getNavClass(pathname === "/solutions")}
								>
									Solutions
								</Link>
							</li>
								<li>
								<Link
									href="/#product"
									onClick={() => setIsMenuOpen(false)}
									className={getNavClass(pathname === "/")}
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									href="/industries"
									onClick={() => setIsMenuOpen(false)}
									className={getNavClass(pathname === "/industries")}
								>
									Industries
								</Link>
							</li>
						
							<li className="site-nav-mobile-only">
								<Link
									href="/contact"
									onClick={() => {
										setIsMenuOpen(false);
										setIsCompanyOpen(false);
									}}
									className={getNavClass(pathname === "/contact")}
								>
									Contact
								</Link>
							</li>
							<li className="site-nav-mobile-only">
								<Link
									href="/about"
									onClick={() => {
										setIsMenuOpen(false);
										setIsCompanyOpen(false);
									}}
									className={getNavClass(pathname === "/about")}
								>
									About Us
								</Link>
							</li>

							<li className={`site-nav-item-with-submenu site-nav-desktop-only ${isCompanyOpen ? "site-nav-item-open" : ""}`}>
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
											<Link
												href="/contact"
												onClick={() => {
													setIsMenuOpen(false);
													setIsCompanyOpen(false);
												}}
												className={`nav-link site-nav-link site-nav-sublink ${isAboutPage ? "about-bridge-nav-link" : ""} ${pathname === "/contact" ? "site-nav-link-active" : ""}`}
											>
												Contact
											</Link>
										</li>
										<li>
											<Link
												href="/about"
												onClick={() => {
													setIsMenuOpen(false);
													setIsCompanyOpen(false);
												}}
												className={`nav-link site-nav-link site-nav-sublink ${isAboutPage ? "about-bridge-nav-link" : ""} ${pathname === "/about" ? "site-nav-link-active" : ""}`}
											>
												About Us
											</Link>
										</li>
									</ul>
							</li>
						</ul>
					</nav>

					<Link
						href="/request-quote"
						onClick={() => setIsMenuOpen(false)}
						className={`quote-button site-nav-quote ${isAboutPage ? "about-bridge-quote-button" : ""}`}
						aria-label="Request a quote"
					>
						Request a Demo
					</Link>
				</div>
			</div>
		</header>
	);
}

export default Header;
