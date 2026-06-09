import type { ReactNode } from "react";
import ScrollRevealManager from "../common/ScrollRevealManager";
import Footer from "./Footer";
import Header from "./Header";

type MainLayoutProps = {
	children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
	return (
		<div className="site-shell">
			<ScrollRevealManager />
			<Header />
			<main className="site-main">
				{children}
			</main>
			<Footer />
		</div>
	);
}

export default MainLayout;
