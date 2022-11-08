import axios from "axios";
import ExtraItemWithCost from "../../Entities/ExtraItemWithCost";
import Mess_extra_entry from "../../Entities/Mess_extra_entry";
import DateUtils from "../../Solutions/DateUtils";
import { Fetch } from "../../Solutions/FetchUtils";

export default class DataFetching extends Fetch {
	getListOfExtraEntries(student_roll_number: string, mess_id: string) {
		const api = `api/mess/extras/${DateUtils.jsonDateFormat(new Date())}`;
		return Fetch.getRequest<Array<ExtraItemWithCost>>(api, {
			student_roll_number,
			mess_id,
		});
	}

	createExtraEntry(
		student_roll_number: string,
		mess_id: string,
		item_name: string
	) {
		const api = `api/mess/createExtraEntry`;
		const extra_entry = new Mess_extra_entry(
      '', 
			student_roll_number,
			"",
			mess_id,
			item_name,
			new Date()
		);
		return Fetch.postRequest<boolean, Mess_extra_entry>(api, extra_entry);
	}

  
}
