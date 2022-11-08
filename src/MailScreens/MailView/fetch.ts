import Mail from "../../Entities/Mail";
import { Fetch } from "../../Solutions/FetchUtils";

export default class FetchUtils extends Fetch {
  async postMail() {

  }

  getMail(type : 'sent'|'received', cmail_id: string) {
    return Fetch.getRequest<Array<Mail>>(`api/mails/${type}`, {cmail_id}); 
  }
}