import React from "react";
import "./app.scss";
import Home from "./components/home";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}
