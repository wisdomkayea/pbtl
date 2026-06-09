type ApiResponse = {
	message: string;
};

export type QuoteRequestPayload = {
	firstName: string;
	lastName: string;
	companyName: string;
	email: string;
	location: string;
	site: string;
	service: string;
	requestDetails: string;
};

export type ContactRequestPayload = {
	firstName: string;
	lastName: string;
	email: string;
	companyName: string;
	location: string;
	site: string;
	message: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_PROLIANCE_API_BASE_URL ?? "https://proliance-api.vercel.app";

async function postJson<TPayload>(endpoint: string, payload: TPayload): Promise<ApiResponse> {
	const response = await fetch(`${API_BASE_URL}${endpoint}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(payload)
	});

	const data = (await response.json().catch(() => null)) as ApiResponse | null;

	if (!response.ok) {
		throw new Error(data?.message ?? "Something went wrong while submitting the form.");
	}

	return data ?? { message: "Submitted successfully" };
}

export function sendQuoteRequest(payload: QuoteRequestPayload) {
	return postJson("/contact/quote", payload);
}

export function sendContactMessage(payload: ContactRequestPayload) {
	return postJson("/contact", payload);
}
