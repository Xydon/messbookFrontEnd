import axios from "axios";
import Mail from "../../Entities/Mail";
import { ResponseWithError } from "../../Entities/ResponseWithError";
import { Fetch } from "../../Solutions/FetchUtils";

export default class FetchUtils extends Fetch {
  async postMail(mail : Mail) {
    const api = this.getApi('api/mails/create'); 
    const res = await axios.post<ResponseWithError<Mail>>(api, mail); 
    const data = res.data; 
    console.log(res); 
    if(Fetch.checkFailed(data.error) === false) return null; 
    
    return data.response; 
  }

  getMail(type : 'sent'|'received', cmail_id: string) {
    return Fetch.getRequest<Array<Mail>>(`api/mails/${type}`, {cmail_id}); 
  }
}