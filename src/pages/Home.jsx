import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../styles/pages/home.scss";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projets from "../components/Projets";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <Projets />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
