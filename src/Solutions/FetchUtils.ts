import axios from "axios";

type ResponseWithError<T> = {
	response: T;
	error: {
		errorCode: string;
		errorMessages: string[];
	};
};

export default async function fetchData<T>(
	url: string,
	params?: { [key: string]: string }
) {
	const response = await axios.get<ResponseWithError<T>>(url, { params });
	const data = response.data;

	if (data.error.errorCode !== "SUCCESS") {
		if (data.error.errorMessages.length !== 0)
			alert(data.error.errorMessages.at(0));
		else alert("cannot fetch");
		return null;
	}

	return data.response;
}

export class Fetch {
	static readonly baseUrl = "http://localhost:8080";

	static checkFailed(error: { errorCode: string; errorMessages: string[] }) {
		if (error.errorCode !== "SUCCESS") {
			if (error.errorMessages.length !== 0) alert(error.errorMessages.at(0));
			else alert("cannot fetch");
			return false;
		}
		return true;
	}

	protected getApi(rawApi: string) {
		return `${Fetch.baseUrl}/${rawApi}`;
	}

	static getRequest<T>(rawApi: string, params?: { [key: string]: string }) {
		const api = `${Fetch.baseUrl}/${rawApi}`;
		return fetchData<T>(api, params);
	}

	static async get<T>(
		rawApi: string,
		params?: { [key: string]: string }
	): Promise<T> {
		const api = `${Fetch.baseUrl}/${rawApi}`;
		return (await axios.get<T>(api, { params })).data;
	}
}
