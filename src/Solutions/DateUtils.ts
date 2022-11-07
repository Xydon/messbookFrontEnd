export default class DateUtils {
	static dayMapper(dayNumber: number) {
		const map = [
			"sunday",
			"monday",
			"tuesday",
			"wednesday",
			"thursday",
			"friday",
			"saturday",
		];
		return map[dayNumber];
	}

	static monthMapper(monthNumber: number) {
		const map = [
			"january",
			"february",
			"march",
			"april",
			"may",
			"june",
			"july",
			"august",
			"september",
			"october",
			"november",
			"december",
		];
    return map[monthNumber]; 
	}

	static inversetMonthMapper(monthName : string) {
		const map : {[key : string] : number} = {
			january : 0, 
			february : 1, 
			march : 2, 
			april : 3, 
			may : 4, 
			june : 5, 
			july : 6, 
			august : 7, 
			september : 8, 
			october : 9, 
			november : 10, 
			december : 11
		}

		return map[monthName.toLowerCase()]; 
	}

  static getFirstDayOfMonth(monthNumber : number) {
    return new Date(); 
  }

	static mapMultiMonthFromMonthDate(monthNumberList : Array<Date>) : Array<string> {
		return monthNumberList.map(val => DateUtils.monthMapper(val.getMonth())); 
	}

	static jsonDateFormat(date : Date) {
		return `${date.getFullYear().toString()}-${date.getMonth()+1}-${date.getDate().toString()}`; 
	}

}
