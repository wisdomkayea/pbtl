import "./RequestQuote.css";

function RequestQuotePage() {
	return (
		<section className="request-quote-page" aria-label="Request quote page">
			<div className="container request-quote-container">
				<header className="request-quote-header">
					<h1>Request for Quote</h1>
					<p>
						Share a few details about what you&apos;re looking for, and we&apos;ll help you find the
						right service or custom solution.
					</p>
				</header>

				<form className="request-quote-form" noValidate>
					<div className="request-quote-row-two">
						<div className="request-quote-field request-quote-field-line">
							<label htmlFor="requestFirstName">
								First Name <span>*</span>
							</label>
							<input id="requestFirstName" name="firstName" type="text" />
						</div>

						<div className="request-quote-field request-quote-field-line">
							<label htmlFor="requestLastName">
								Last Name <span>*</span>
							</label>
							<input id="requestLastName" name="lastName" type="text" />
						</div>
					</div>

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestCompanyName">
							Company Name <span>*</span>
						</label>
						<input id="requestCompanyName" name="companyName" type="text" />
					</div>

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestEmail">
							Email <span>*</span>
						</label>
						<input id="requestEmail" name="email" type="email" />
					</div>

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestProduct">
							Products <span>*</span>
						</label>
						<textarea id="requestProduct" name="product" rows={1} />
						 
						{/* <select id="requestProduct" name="product" defaultValue="">
							<option value="" disabled hidden>
								Select a product
							</option>
							<option value="workhub">Workhub</option>
							<option value="dms">Document Management System</option>
							<option value="finance">Finance Suite</option>
							<option value="audit">Audit and Compliance</option>
							<option value="procurement">Procurement</option>
						</select> */}
					</div>

					<div className="request-quote-field request-quote-field-line">
						<label htmlFor="requestDetails">
							Request Details <span>*</span>
						</label>
						<textarea id="requestDetails" name="requestDetails" rows={1} />
					</div>

					<button type="submit" className="request-quote-submit">
						Request Quote
					</button>
				</form>
			</div>
		</section>
	);
}

export default RequestQuotePage;
