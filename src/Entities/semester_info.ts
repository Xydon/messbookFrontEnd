export default class Semester_info {

    constructor( 
      readonly semester_details_id : string, 
      readonly student_roll_number : string, 
      readonly hostel_name : string, 
      readonly  mess_id : string ,
      readonly semester_number : number,
      readonly mess_advance_paid : number
      
    ) {}
  }