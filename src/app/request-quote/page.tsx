"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import "./page.css";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { sendQuoteRequest } from "../../lib/contactApi";
import { resolveUserLocation } from "../../lib/location";

const PRODUCT_OPTIONS = [
	{ value: "care-administrator", label: "E3OS Care Administrator" },
	{ value: "recruitment", label: "E3OS Recruitment" },
	{ value: "pro-dms", label: "PRO DMS" },
	{ value: "human-resources", label: "E3OS Human Resources" },
	{ value: "workhub", label: "E3OS WorkHub" },
	{ value: "audit-compliance", label: "E3OS Audit & Compliance" },
	{ value: "assets-management", label: "E3OS Assets Management" },
	{ value: "finance", label: "E3OS Finance" },
	{ value: "procurement", label: "E3OS Procurement" },
	{ value: "cmvp", label: "CMVP" },
	{ value: "pro-learn", label: "PRO Learn" },
	{ value: "custom", label: "Custom Solution" }
];

const PRODUCT_OPTION_VALUES = new Set(PRODUCT_OPTIONS.map((option) => option.value));

function RequestQuotePageContent() {
	const searchParams = useSearchParams();
	const [selectedProduct, setSelectedProduct] = useState("");
	const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
	const productMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent) => {
			if (!productMenuRef.current) {
				return;
			}

			if (!productMenuRef.current.contains(event.target as Node)) {
				setIsProductMenuOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsProductMenuOpen(false);
			}
		};

		document.addEventListener("mousedown", handleOutsideClick);
		window.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			window.removeEventListener("keydown", handleEscape);
		};
	}, []);

	const selectedProductLabel =
		PRODUCT_OPTIONS.find((option) => option.value === selectedProduct)?.label ?? "Select a product";

	useEffect(() => {
		const productParam = (searchParams?.get("product") ?? "").trim().toLowerCase();

		if (!productParam) {
			setSelectedProduct("");
			return;
		}

		if (PRODUCT_OPTION_VALUES.has(productParam)) {
			setSelectedProduct(productParam);
		}
	}, [searchParams]);

	useEffect(() => {
		if (!toast) {
			return;
		}

		const timeoutId = window.setTimeout(() => {
			setToast(null);
		}, 3500);

		return () => {
			window.clearTimeout(timeoutId);
		};
	}, [toast]);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const formData = new FormData(form);
		const customSolution = (formData.get("customSolution")?.toString() ?? "").trim();
		const requestDetails = (formData.get("requestDetails")?.toString() ?? "").trim();

		const service = selectedProduct === "custom" ? customSolution : selectedProductLabel;

		if (!service || service === "Select a product") {
			setToast({ type: "error", message: "Please select a product or service." });
			return;
		}

		setIsSubmitting(true);

		try {
			const location = await resolveUserLocation();

			const response = await sendQuoteRequest({
				firstName: (formData.get("firstName")?.toString() ?? "").trim(),
				lastName: (formData.get("lastName")?.toString() ?? "").trim(),
				companyName: (formData.get("companyName")?.toString() ?? "").trim(),
				email: (formData.get("email")?.toString() ?? "").trim(),
				location,
				site: "pbtl",
				service,
				requestDetails: selectedProduct === "custom" ? `${requestDetails}\n\nCustom Solution Details: ${customSolution}` : requestDetails
			});

			setToast({ type: "success", message: response.message || "Quote request sent successfully" });
			form.reset();
			setSelectedProduct("");
			setIsProductMenuOpen(false);
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "Unable to send quote request.";
			setToast({ type: "error", message: errorMessage });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="request-quote-page" aria-label="Request quote page">
			<div className="container request-quote-container">
				<header className="request-quote-header">
					<h1>Request a Demo</h1>
					<p>
						Share a few details about what you&apos;re looking for, and we&apos;ll help you find the
						right service or custom solution.
					</p>
				</header>

				<form className="request-quote-form" noValidate onSubmit={handleSubmit}>
					<div className="request-quote-row-two">
						<div className="request-quote-field request-quote-field-line">
							<label htmlFor="requestFirstName">
								First Name <span>*</span>
							</label>
							<input id="requestFirstName" name="firstName" type="text" required />
						</div>

						<div className="request-quote-field request-quote-field-line">
							<label htmlFor="requestLastName">
								Last Name <span>*</span>
							</label>
							<input id="requestLastName" name="lastName" type="text" required />
						</div>
					</div>

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestCompanyName">
							Company Name <span>*</span>
						</label>
						<input id="requestCompanyName" name="companyName" type="text" required />
					</div>

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestEmail">
							Email <span>*</span>
						</label>
						<input id="requestEmail" name="email" type="email" required />
					</div>

					<div className="request-quote-field-select">
						<label htmlFor="requestProduct">
							Products <span>*</span>
						</label>
						<input type="hidden" name="product" value={selectedProduct} />
						<div className="request-quote-custom-select" ref={productMenuRef}>
							<button
								type="button"
								id="requestProduct"
								className={`request-quote-select-trigger ${selectedProduct ? "has-value" : ""}`}
								onClick={() => setIsProductMenuOpen((previous) => !previous)}
								aria-haspopup="listbox"
								aria-expanded={isProductMenuOpen}
							>
								<span>{selectedProductLabel}</span>
								<span className={`request-quote-select-arrow ${isProductMenuOpen ? "open" : ""}`} aria-hidden="true">
									<svg viewBox="0 0 16 16" fill="none">
										<path d="M3.5 6.5 8 11l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</span>
							</button>

							{isProductMenuOpen && (
								<ul className="request-quote-select-menu" role="listbox" aria-label="Product options">
									{PRODUCT_OPTIONS.map((option) => (
										<li key={option.value}>
											<button
												type="button"
												className={`request-quote-select-option ${selectedProduct === option.value ? "active" : ""}`}
												onClick={() => {
													setSelectedProduct(option.value);
													setIsProductMenuOpen(false);
												}}
												role="option"
												aria-selected={selectedProduct === option.value}
											>
												{option.label}
											</button>
										</li>
									))}
								</ul>
							)}
						</div>
					</div>

					{selectedProduct === "custom" && (
						<div className="request-quote-field request-quote-field-line">
							<label htmlFor="requestCustomSolution">Custom Solution Details <span>*</span></label>
							<textarea id="requestCustomSolution" name="customSolution" rows={1} required />
						</div>
					)}

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestDetails">
							Request Details <span>*</span>
						</label>
						<textarea id="requestDetails" name="requestDetails" rows={1} required />
					</div>

					<button type="submit" className="request-quote-submit" disabled={isSubmitting}>
						Submit
					</button>
				</form>
				{toast && (
					<div className={`site-toast site-toast-${toast.type}`} role="status" aria-live="polite">
						{toast.message}
					</div>
				)}
				<div className="container privacy-site-privacy-note">
					All our services are carried out with the clear understanding that our customer data privacy is important, and we are committed to the protection of personal information in accordance with the General Data Protection Regulation (GDPR), the Nigeria Data Protection Act (NDPA), and other relevant global privacy regulations. For more information about our Data & Privacy Policy, please visit our <span className="privacy-note"><Link href="/privacy-policy">Privacy Policy</Link></span>.
				</div>
			</div>
		</section>
	);
}

export default function RequestQuotePage() {
	return (
		<Suspense fallback={null}>
			<RequestQuotePageContent />
		</Suspense>
	);
}
