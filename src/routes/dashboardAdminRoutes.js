import AddAdmin from "../pages/dashboard/AddAdmin";
import AddService from "../pages/dashboard/AddService";
import ManageService from "../pages/dashboard/ManageService";
import OrderList from "../pages/dashboard/OrderList";

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
];
