import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-svg-core/styles.css";

const App = () => {
  return (
    <BrowserRouter basename="/prototype-portfolio">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        {/* <Route path="Contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
