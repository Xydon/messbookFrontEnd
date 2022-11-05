import AssetStore from "../assets/AssetStore";
import { SidebarNavType } from "../props";

const MessRouterConfig : Array<SidebarNavType> = [
  new SidebarNavType(AssetStore.Profile, '/profile', 'profile', false), 
  new SidebarNavType(AssetStore.Students, '/students', 'students', false), 
  new SidebarNavType(AssetStore.StudentCancel, '/cancellation', 'Cancellation', false), 
  new SidebarNavType(AssetStore.Invoice, '/messInvoice', 'invoice', false), 
  new SidebarNavType(AssetStore.Feedback, '/feedback', 'feedbacks', false), 
  
]; 

export default MessRouterConfig; 