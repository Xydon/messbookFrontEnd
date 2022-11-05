import AssetStore from "../assets/AssetStore";
import { SidebarNavType } from "../props";

const StudentRouteConfig : Array<SidebarNavType> = [
  new SidebarNavType(AssetStore.Profile, '/profile', 'profile', false),
  new SidebarNavType(AssetStore.Mess, '/mess', 'mess', false),
  new SidebarNavType(AssetStore.Invoice, '/invoice', 'invoice', false), 
  new SidebarNavType(AssetStore.Payments, '/payment', 'payments', false)
]

export default StudentRouteConfig; 