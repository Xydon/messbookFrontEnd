export default class Messinvoice {

    constructor(
      readonly semester_id : string, 
      readonly mess_id : string, 
      readonly base_amount : number, 
      readonly extra_amount : number, 
      readonly  previous_due : number, 
      readonly paid_amount : number  
    ) {}
  }