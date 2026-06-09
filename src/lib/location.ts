import axios from "axios";

type IpApiResponse = {
	city?: string;
	regionName?: string;
	country?: string;
};

export async function resolveUserLocation(): Promise<string> {
	try {
		const locationRes = await axios.get<IpApiResponse>("http://ip-api.com/json/");
		const location = [locationRes.data.city, locationRes.data.regionName, locationRes.data.country]
			.filter(Boolean)
			.join(", ");

		return location || "Unknown";
	} catch {
		return "Unknown";
	}
}
