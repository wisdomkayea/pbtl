"use client";

import { useEffect, useState } from "react";
import "./page.css";
import Link from "next/link";
import { sendContactMessage } from "../../lib/contactApi";
import { resolveUserLocation } from "../../lib/location";

function ContactUsPage() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

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

		setIsSubmitting(true);

		try {
			const location = await resolveUserLocation();

			const response = await sendContactMessage({
				firstName: (formData.get("firstName")?.toString() ?? "").trim(),
				lastName: (formData.get("lastName")?.toString() ?? "").trim(),
				email: (formData.get("email")?.toString() ?? "").trim(),
				companyName: (formData.get("companyName")?.toString() ?? "").trim(),
				location,
				site: "pbtl",
				message: (formData.get("message")?.toString() ?? "").trim()
			});

			setToast({ type: "success", message: response.message || "Contact message sent successfully" });
			form.reset();
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : "Unable to send contact message.";
			setToast({ type: "error", message: errorMessage });
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className="contact-site-page" aria-label="Contact page">

			<div className="container contact-site-container">
				<div className="contact-site-intro">
					<h1>Contact us</h1>
					<p>
						Whether you have a question, a project in mind, or simply want to explore what
						PBTL can do for your organisation, we are here and ready to listen. Reach out and
						let&apos;s start a conversation.
					</p>

					<div className="contact-site-details" aria-label="Contact information">
						<div className="contact-site-detail-item">
							<span className="contact-site-detail-icon" aria-hidden="true">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path d="M10.2133 16.0252C9.88804 16.3298 9.45329 16.5 9.00084 16.5C8.54839 16.5 8.11364 16.3298 7.78837 16.0252C4.80977 13.2195 0.818072 10.0852 2.7647 5.53475C3.81723 3.07437 6.34376 1.5 9.00084 1.5C11.6579 1.5 14.1845 3.07437 15.237 5.53475C17.1811 10.0795 13.1993 13.2292 10.2133 16.0252Z" stroke="#9E371A" strokeWidth="1.5"/>
									<path opacity="0.4" fillRule="evenodd" clipRule="evenodd" d="M9.00084 16.5C9.45329 16.5 9.88804 16.3298 10.2133 16.0252C10.4404 15.8126 10.6733 15.5978 10.9089 15.3806C13.7707 12.7419 17.0333 9.73378 15.237 5.53475C14.1845 3.07437 11.6579 1.5 9.00084 1.5C6.34376 1.5 3.81723 3.07437 2.7647 5.53475C0.9757 9.71672 4.20225 12.7026 7.04856 15.3366C7.29934 15.5687 7.54718 15.798 7.78837 16.0252C8.11364 16.3298 8.54839 16.5 9.00084 16.5ZM9 10.875C10.4497 10.875 11.625 9.69975 11.625 8.25C11.625 6.80025 10.4497 5.625 9 5.625C7.55025 5.625 6.375 6.80025 6.375 8.25C6.375 9.69975 7.55025 10.875 9 10.875Z" fill="#9E371A"/>
									<path d="M11.625 8.25C11.625 9.69975 10.4497 10.875 9 10.875C7.55025 10.875 6.375 9.69975 6.375 8.25C6.375 6.80025 7.55025 5.625 9 5.625C10.4497 5.625 11.625 6.80025 11.625 8.25Z" stroke="#9E371A" strokeWidth="1.5"/>
								</svg>
							</span>
							<p className="contact-site-detail-text">
								Plot 5 Owule Ojuan Street, off Peter Odili Road, Trans Amadi, Port Harcourt,
								Rivers
							</p>
						</div>

						<div className="contact-site-detail-item">
							<span className="contact-site-detail-icon" aria-hidden="true">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path opacity="0.4" d="M6.86869 4.28417L6.5667 3.60469C6.36924 3.16041 6.27051 2.93826 6.12285 2.76826C5.93781 2.55521 5.6966 2.39845 5.42676 2.31588C5.21144 2.25 4.96834 2.25 4.48216 2.25C3.77093 2.25 3.41532 2.25 3.1168 2.38672C2.76515 2.54777 2.44757 2.89746 2.32105 3.26295C2.21363 3.57322 2.2444 3.89207 2.30593 4.52977C2.96093 11.3176 6.68236 15.0391 13.4702 15.6941C14.1079 15.7556 14.4268 15.7864 14.7371 15.679C15.1025 15.5524 15.4522 15.2349 15.6133 14.8832C15.75 14.5847 15.75 14.2291 15.75 13.5178C15.75 13.0317 15.75 12.7886 15.6841 12.5732C15.6015 12.3034 15.4448 12.0622 15.2317 11.8771C15.0617 11.7295 14.8396 11.6308 14.3953 11.4333L13.7158 11.1313C13.2347 10.9175 12.9941 10.8105 12.7496 10.7873C12.5157 10.765 12.2798 10.7979 12.0608 10.8831C11.832 10.9722 11.6297 11.1408 11.2253 11.4779C10.8226 11.8134 10.6213 11.9812 10.3753 12.071C10.1572 12.1507 9.86892 12.1802 9.63924 12.1463C9.38015 12.1082 9.18175 12.0021 8.78497 11.7901C7.55041 11.1304 6.86964 10.4496 6.2099 9.21503C5.99785 8.81825 5.89183 8.61985 5.85365 8.36076C5.81981 8.13108 5.84931 7.84277 5.92897 7.6247C6.01884 7.37871 6.18661 7.17739 6.52214 6.77475C6.85921 6.37026 7.02775 6.16802 7.11686 5.93919C7.20214 5.7202 7.23496 5.4843 7.21271 5.25036C7.18946 5.00589 7.08253 4.76532 6.86869 4.28417Z" fill="#9E371A" stroke="#9E371A" strokeWidth="1.5" strokeLinecap="round"/>
									<path d="M6.86869 4.28417L6.5667 3.60469C6.36924 3.16041 6.27051 2.93826 6.12285 2.76826C5.93781 2.55521 5.6966 2.39845 5.42676 2.31588C5.21144 2.25 4.96834 2.25 4.48216 2.25C3.77093 2.25 3.41532 2.25 3.1168 2.38672C2.76515 2.54777 2.44757 2.89746 2.32105 3.26295C2.21363 3.57322 2.2444 3.89207 2.30593 4.52977C2.96093 11.3176 6.68236 15.0391 13.4702 15.6941C14.1079 15.7556 14.4268 15.7864 14.737 15.679C15.1025 15.5524 15.4522 15.2349 15.6133 14.8832C15.75 14.5847 15.75 14.2291 15.75 13.5178C15.75 13.0317 15.75 12.7886 15.6841 12.5732C15.6015 12.3034 15.4448 12.0622 15.2317 11.8771C15.0617 11.7295 14.8396 11.6308 14.3953 11.4333L13.7158 11.1313C13.2347 10.9175 12.9941 10.8105 12.7496 10.7873C12.5157 10.765 12.2798 10.7979 12.0608 10.8831C11.832 10.9722 11.6297 11.1408 11.2252 11.4779C10.8226 11.8134 10.6213 11.9812 10.3753 12.071C10.1572 12.1507 9.86892 12.1802 9.63924 12.1463C9.38015 12.1082 9.18175 12.0021 8.78497 11.7901C7.55041 11.1304 6.86964 10.4496 6.2099 9.21503C5.99785 8.81825 5.89183 8.61985 5.85365 8.36076C5.81981 8.13108 5.84931 7.84277 5.92897 7.6247C6.01884 7.37871 6.18661 7.17739 6.52214 6.77475C6.85921 6.37026 7.02775 6.16802 7.11686 5.93919C7.20214 5.7202 7.23496 5.4843 7.21271 5.25036C7.18946 5.00589 7.08253 4.76532 6.86869 4.28417Z" stroke="#9E371A" strokeWidth="1.5" strokeLinecap="round"/>
								</svg>
							</span>
							<div className="contact-site-detail-text">
								<p>+234 911 4597 013, +234 813 4459 519</p>
							</div>
						</div>

						<div className="contact-site-detail-item">
							<span className="contact-site-detail-icon" aria-hidden="true">
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
									<path opacity="0.4" d="M6.82412 15.3476C8.27948 15.3841 9.72052 15.3841 11.1759 15.3476C13.5373 15.2883 14.7179 15.2586 15.5663 14.407C16.4146 13.5554 16.4391 12.4059 16.4882 10.1067V10.1067C16.5039 9.36745 16.5039 8.63256 16.4882 7.8933C16.4544 6.30946 16.4323 5.27115 16.1444 4.5L9 8.25L1.85558 4.5C1.56774 5.27115 1.5456 6.30945 1.51182 7.89328C1.49606 8.63255 1.49606 9.36745 1.51182 10.1067C1.56086 12.4059 1.58537 13.5554 2.43372 14.407C3.28206 15.2586 4.46275 15.2883 6.82412 15.3476Z" fill="#9E371A" stroke="#9E371A" strokeWidth="1.5" strokeLinejoin="round"/>
									<path d="M1.5 4.5L6.68477 7.43773C8.5962 8.52076 9.4038 8.52076 11.3152 7.43773L16.5 4.5" stroke="#9E371A" strokeWidth="1.5" strokeLinejoin="round"/>
									<path d="M1.51182 10.1067C1.56086 12.4059 1.58537 13.5554 2.43372 14.407C3.28206 15.2586 4.46275 15.2883 6.82412 15.3476C8.27948 15.3841 9.72052 15.3841 11.1759 15.3476C13.5373 15.2883 14.7179 15.2586 15.5663 14.407C16.4146 13.5554 16.4391 12.4059 16.4882 10.1067C16.5039 9.36745 16.5039 8.63256 16.4882 7.8933C16.4391 5.59415 16.4146 4.44457 15.5663 3.593C14.7179 2.74142 13.5373 2.71176 11.1759 2.65243C9.72052 2.61586 8.27948 2.61586 6.82412 2.65242C4.46275 2.71175 3.28206 2.74141 2.43371 3.59299C1.58537 4.44456 1.56085 5.59413 1.51182 7.89328C1.49606 8.63255 1.49606 9.36745 1.51182 10.1067Z" stroke="#9E371A" strokeWidth="1.5" strokeLinejoin="round"/>
								</svg>
							</span>
							<div className="contact-site-detail-links">
								<a href="mailto:info@proliancetechnologies.com">info@proliancetechnologies.com</a>
							</div>
						</div>
					</div>
				</div>

				<form className="contact-site-form" noValidate onSubmit={handleSubmit}>
					<div className="contact-site-row-two">
						<div className="contact-site-field">
							<label htmlFor="firstName">
								First Name <span>*</span>
							</label>
							<input id="firstName" name="firstName" type="text" required />
						</div>

						<div className="contact-site-field">
							<label htmlFor="lastName">
								Last Name <span>*</span>
							</label>
							<input id="lastName" name="lastName" type="text" required />
						</div>
					</div>

					<div className="contact-site-field">
						<label htmlFor="email">
							Email <span>*</span>
						</label>
						<input id="email" name="email" type="email" required />
					</div>

					<div className="contact-site-field">
						<label htmlFor="companyName">
							Company Name <span>*</span>
						</label>
						<input id="companyName" name="companyName" type="text" required />
					</div>

					<div className="contact-site-field">
						<label htmlFor="message">
							Message <span>*</span>
						</label>
						<textarea id="message" name="message" rows={3} required />
					</div>

					<button type="submit" className="contact-site-submit" disabled={isSubmitting}>
						Submit
					</button>

					
				</form>
				{toast && (
					<div className={`site-toast site-toast-${toast.type}`} role="status" aria-live="polite">
						{toast.message}
					</div>
				)}
				
			</div>
			<div className="container contact-site-privacy-note">
				All our services are carried out with the clear understanding that our customer data privacy is important, and we are committed to the protection of personal information in accordance with the General Data Protection Regulation (GDPR), the Nigeria Data Protection Act (NDPA), and other relevant global privacy regulations. For more information about our Data & Privacy Policy, please visit our <span className="privacy-note"><Link href="/privacy-policy">Privacy Policy</Link></span>.
			</div>
			
		</section>
	);
}

export default ContactUsPage;
