export default class Semester_details {

    constructor( 
      readonly id : string, 
      readonly start_date : Date,
      readonly end_date : Date,
      readonly price_per_meal : number,
      readonly mess_advance_price : number
    ) {}
  }
  