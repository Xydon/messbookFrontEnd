import axios from "axios";
import { ResponseWithError } from "../../Entities/ResponseWithError";
import Semester_details from "../../Entities/Semester_details";
import Student from "../../Entities/Student";


export async function fetchStudents(){
  const studentRespnose = await axios.get<ResponseWithError<Array<Student>>>('http://localhost:8080/api/mess/students', {
    params : {
      mess_id : 'XKLSEJF'
    }
  }); 
  
  return studentRespnose.data.response; 
}