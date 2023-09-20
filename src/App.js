import React from "react";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "@fortawesome/fontawesome-svg-core/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
