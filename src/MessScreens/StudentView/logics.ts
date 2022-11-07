import Student from "../../Entities/Student";

export function filterStudentList(
	studentList: Array<Student>,
	filterControl: string
) {
	return studentList.filter((student) => {
		if (filterControl === "") return true;
		if (!Number.isNaN(parseInt(filterControl))) {
			return student.roll_number.includes(filterControl);
		} else {
			return student.name.toLowerCase().includes(filterControl.toLowerCase());
		}
	});
}
