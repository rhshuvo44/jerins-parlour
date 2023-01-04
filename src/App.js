import { Route, Routes } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<Contact />} />
      </Routes>
    </Navbar>
  );
}

export default App;
