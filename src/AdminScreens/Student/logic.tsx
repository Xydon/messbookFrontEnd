import Student from "../../Entities/Student";

export function filterStudentList(
	students: Array<Student>,
	name?: string,
	rollNumber?: string,
	department?: string
) {
  return students.filter(val => {
    if(name && val.name !== name) {
      return false; 
    }
    if(rollNumber && val.roll_number !== rollNumber) {
      return false; 
    }
    if(department && val.department !== department) {
      return false; 
    }
    return true; 
  })
}
