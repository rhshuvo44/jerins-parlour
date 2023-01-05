import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { publicRoutes } from "./routes/publicRoutes";
import "swiper/css";
import "swiper/css/pagination";
import Footer from "./layout/Footer";
function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
      <Footer />
    </Navbar>
  );
}

export default App;
