export type ResponseWithError<T> = {
	response: T;
	error: {
		errorCode: string;
		errorMessages: string[];
	};
};
