import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import RequireAuth from "./authentication/RequireAuth";
import RequiredAdmin from "./authentication/RequiredAdmin";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import { dashboardAdminRoutes } from "./routes/dashboardAdminRoutes";
import { dashboardUserRoutes } from "./routes/dashboardUserRoutes";
import { privateRoutes } from "./routes/privateRoutes";
import { publicRoutes } from "./routes/publicRoutes";
function App() {
  return (
    <Navbar>
      <ToastContainer />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        {/* private routes  */}
        <Route element={<RequireAuth />}>
          {privateRoutes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          {/* dashboard  */}
          {/* user  */}
          <Route path="/dashboard" element={<Dashboard />}>
            {dashboardUserRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          {/* admin  */}
          <Route element={<RequiredAdmin />}>
            <Route path="/dashboard" element={<Dashboard />}>
              {dashboardAdminRoutes.map(({ path, Component }, index) => (
                <Route key={index} path={path} element={<Component />} />
              ))}
            </Route>
          </Route>
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
