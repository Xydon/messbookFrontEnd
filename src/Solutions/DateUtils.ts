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

  static getFirstDayOfMonth(monthNumber : number) {
    return new Date(); 
  }

}
