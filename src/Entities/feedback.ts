export default class Feedback {

    constructor( 
      readonly student_roll_number : string, 
      readonly semester_id : string, 
      readonly mess_id : string, 
      readonly  text : string,
      readonly  month_of_comment : Date,
      readonly  rating : number
       
    ) {}
  }