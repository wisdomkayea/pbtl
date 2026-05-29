import "./Contact.css";

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
		</section>
	);
}

export default ContactUsPage;
