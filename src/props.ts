export class FeedbackProp {
	constructor(
		readonly month: string,
		readonly text: string,
		readonly rating: number
	) {}
}

export class NotificationProp {
	constructor(
		readonly title: string,
		readonly text: string,
		readonly date: string
	) {}; 
}

export class SidebarNavType {
	constructor(
		readonly icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
		readonly link: string,
		readonly label: string,
		readonly isActive: boolean
	) {}
}
