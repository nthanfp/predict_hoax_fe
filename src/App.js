import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Beranda from "./pages/HoaxDetectionForm";
import TentangKami from "./pages/TentangKami";
import Kontak from "./pages/Kontak";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/about" element={<TentangKami />} />
        <Route path="/contact" element={<Kontak />} />
        <Route path="/" element={<Beranda />} />
      </Routes>
    </Router>
  );
};

export default App;
