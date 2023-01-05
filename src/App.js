import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import RequireAuth from "./authentication/RequireAuth";
import Navbar from "./layout/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import { publicRoutes } from "./routes/publicRoutes";
function App() {
  return (
    <Navbar>
      <ToastContainer />
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}

        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Navbar>
  );
}

export default App;
