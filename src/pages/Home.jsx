import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import "../styles/pages/home.scss";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projets from "../components/Projets";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <Header />
      <Projets />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
