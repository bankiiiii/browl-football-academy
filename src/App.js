import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Players from "./components/Players";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// import Players from "./pages/Players";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Players />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
