export default class notification {

    constructor(
      readonly id : string, 
      readonly owner_id : string, 
      readonly semester_id : string, 
      readonly title : string, 
      readonly  date : Date, 
      readonly text : string
    ) {}
  }