import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import AboutUsPage from "../pages/About/AboutUsPage";
import ContactUsPage from "../pages/Contact/ContactUsPage";
import HomePage from "../pages/Homepage/HomePage";
import IndustriesPage from "../pages/Industries/IndustriesPage";
import RequestQuotePage from "../pages/RequestQuote/RequestQuote";
import ServicesPage from "../pages/Services/Services";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <HomePage />
			},
			{
				path: "industries",
				element: <IndustriesPage />
			},
			{
				path: "services",
				element: <ServicesPage />
			},
			{
				path: "about",
				element: <AboutUsPage />
			},
			{
				path: "contact",
				element: <ContactUsPage />
			},
			{
				path: "request-quote",
				element: <RequestQuotePage />
			}
		]
	}
]);
