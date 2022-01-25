import React from "react";
import "./app.scss";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
