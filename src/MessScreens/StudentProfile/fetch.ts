import axios from "axios";
import { ResponseWithError } from "../../Entities/ResponseWithError";
import Student from "../../Entities/Student";

export {};

export async function getProfileDetails(rollNumber: string) {
	const response = await axios.get<ResponseWithError<Student>>(
		`http://localhost:8080/api/student/information/${rollNumber}`
	);
	const data = response.data;
  if(data.error.errorCode !== 'SUCCESS') {
    alert(data.error.errorCode.at(0)); 
    return null; 
  }
  console.log(data); 
  return data.response; 
}
