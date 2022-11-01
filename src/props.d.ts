export class FeedbackProp {
  constructor(
    readonly month : string, 
    readonly text : string, 
    readonly rating : number 
  ) {}
}

export class NotificationProp {
  constructor(
    readonly title : string, 
    readonly text : string, 
    readonly date : string
  )
}