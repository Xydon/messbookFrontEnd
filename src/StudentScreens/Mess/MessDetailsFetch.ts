import Extra_item_menu from "../../Entities/Extra_item_menu";
import Feedback from "../../Entities/Feedback";
import { Fetch } from "../../Solutions/FetchUtils";

export class FetchUtils extends Fetch {
	getFeedbacksOfMess(mess_id: string, student_roll_number: string) {
		return Fetch.getRequest<Array<Feedback>>("api/mess/feedback/fetch", {
			mess_id,
			student_roll_number,
		});
	}

  getExtraItemsMenu() {
    return Fetch.getRequest<Array<Extra_item_menu>>('api/college/extra_items_menu'); 
  }
}
