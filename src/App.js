import { Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar";
import { publicRoutes } from "./routes/publicRoutes";

function App() {
  return (
    <Navbar>
      <Routes>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
        {/* <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<Contact />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/allService" element={<AllServices />} /> */}
      </Routes>
    </Navbar>
  );
}

export default App;
