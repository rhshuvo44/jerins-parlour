import ServiceUpdate from "../components/dashboard/admin/ServiceUpdate";
import AddAdmin from "../pages/dashboard/admin/AddAdmin";
import AddService from "../pages/dashboard/admin/AddService";
import ManageService from "../pages/dashboard/admin/ManageService";
import OrderList from "../pages/dashboard/admin/OrderList";

export const dashboardAdminRoutes = [
  {
    path: "addServices",
    name: "addServices",
    Component: AddService,
  },
  {
    path: "addAdmin",
    name: "addAdmin",
    Component: AddAdmin,
  },
  {
    path: "orderList",
    name: "orderList",
    Component: OrderList,
  },
  {
    path: "manageService",
    name: "manageService",
    Component: ManageService,
  },
  {
    path: "manageService/serviceUpdate/:id",
    name: "serviceUpdate",
    Component: ServiceUpdate,
  },
];
