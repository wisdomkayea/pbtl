import type { Metadata } from "next";
import type { ReactNode } from "react";
import MainLayout from "../components/layout/MainLayout";
import "../index.css";

export const metadata: Metadata = {
	title: "PBTL",
	description: "Proliance Business Technologies Limited"
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
