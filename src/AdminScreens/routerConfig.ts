import AssetStore from "../assets/AssetStore";
import { SidebarNavType } from "../props";

const AdminRouterConfig : Array<SidebarNavType> = [
  new SidebarNavType(AssetStore.Students, '/students', 'students', false), 
  new SidebarNavType(AssetStore.Mess, '/mess', 'mess', false), 
  new SidebarNavType(AssetStore.Dashboard, '/semester', 'semester', false), 
  new SidebarNavType(AssetStore.Mail, '/mail', 'mail', false), 
  new SidebarNavType(AssetStore.ExtraEntry, '/feedback', 'mess change', false), 
  new SidebarNavType(AssetStore.Payments, '/payments', 'payments', false), 
]; 

export default AdminRouterConfig; 