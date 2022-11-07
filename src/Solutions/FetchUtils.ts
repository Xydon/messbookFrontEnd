import axios from "axios";

type ResponseWithError<T> = {
  response : T, 
  error : {
    errorCode : string, 
    errorMessages : string[]
  }
}

export default async function fetchData<T>(
	url: string,
	initializer:  (data: T) => T,
	params: { [key: string]: string }
) {
	const response = await axios.get<ResponseWithError<T>>(url, {params});
  const data = response.data; 

  if(data.error.errorCode !== 'SUCCESS') {
    alert(data.error.errorMessages.at(0)); 
    return null; 
  }

  const loadedData = initializer(data.response);  

  return loadedData; 
}
