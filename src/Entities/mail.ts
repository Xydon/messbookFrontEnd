export default class Mail {

    constructor( 
      readonly id : string, 
      readonly sender_cmail : string,
      readonly receiver_cmail : string,
      readonly text : string,
      readonly sending_date : Date,
      readonly hasDelivered : boolean,
      readonly hasRead : boolean,
      readonly semester_id : string,
      readonly subject : string
      
    ) {}
  }