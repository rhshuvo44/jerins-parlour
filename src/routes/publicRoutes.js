import Modal from "../components/home/Modal";
import Contact from "../pages/Contact/Contact";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Login/Signup";
import AllServices from "../pages/service/AllServices";

export const publicRoutes = [
  { path: "/", name: "home", Component: Home },
  { path: "/home", name: "home", Component: Home },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/allService", name: "service", Component: AllServices },
  { path: "/login", name: "login", Component: Login },
  { path: "/login", name: "login", Component: Login },
  { path: "/signup", name: "signup", Component: Signup },
  { path: "/modal", name: "modal", Component: Modal },
  { path: "/dashboard", name: "dashboard", Component: Dashboard },
];
