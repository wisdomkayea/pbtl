import { NavLink } from "react-router-dom";
import "./Contact.css";
import { Call02Icon, Location01Icon, Mail01Icon, TelephoneIcon } from "hugeicons-react";

function ContactUsPage() {
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
								<Location01Icon color="#9e371a" />
							</span>
							<p className="contact-site-detail-text">
								Plot 5 Owule Ojuan Street, off Peter Odili Road, Trans Amadi, Port Harcourt,
								Rivers
							</p>
						</div>

						<div className="contact-site-detail-item">
							<span className="contact-site-detail-icon" aria-hidden="true">
								<Call02Icon  color="#9e371a" />
							</span>
							<div className="contact-site-detail-text">
								<p>+234 911 4597 013</p>
								<p>+234 813 4459 519</p>
							</div>
						</div>

						<div className="contact-site-detail-item">
							<span className="contact-site-detail-icon" aria-hidden="true">
								<Mail01Icon color="#9e371a" />
							</span>
							<div className="contact-site-detail-links">
								<a href="mailto:info@proliancetechnologies.com">info@proliancetechnologies.com</a>
							</div>
						</div>
					</div>
				</div>

				<form className="contact-site-form" noValidate>
					<div className="contact-site-row-two">
						<div className="contact-site-field">
							<label htmlFor="firstName">
								First Name <span>*</span>
							</label>
							<input id="firstName" name="firstName" type="text" />
						</div>

						<div className="contact-site-field">
							<label htmlFor="lastName">
								Last Name <span>*</span>
							</label>
							<input id="lastName" name="lastName" type="text" />
						</div>
					</div>

					<div className="contact-site-field">
						<label htmlFor="email">
							Email <span>*</span>
						</label>
						<input id="email" name="email" type="email" />
					</div>

					<div className="contact-site-field">
						<label htmlFor="companyName">
							Company Name <span>*</span>
						</label>
						<input id="companyName" name="companyName" type="text" />
					</div>

					<div className="contact-site-field">
						<label htmlFor="message">
							Message <span>*</span>
						</label>
						<textarea id="message" name="message" rows={3} />
					</div>

					<button type="submit" className="contact-site-submit">
						Submit
					</button>

					
				</form>
				
			</div>
			<div className="container contact-site-privacy-note">
				All our services are carried out with the clear understanding that our customer data privacy is important, and we are committed to the protection of personal information in accordance with the General Data Protection Regulation (GDPR), the Nigeria Data Protection Act (NDPA), and other relevant global privacy regulations. For more information about our Data & Privacy Policy, please visit our <span className="privacy-note"><NavLink to="/privacy-policy">Privacy Policy</NavLink></span>.
			</div>
			
		</section>
	);
}

export default ContactUsPage;
