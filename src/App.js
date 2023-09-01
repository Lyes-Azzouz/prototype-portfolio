import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-svg-core/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate to="/Home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
