import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.scss";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>

        <Footer />
      </Fragment>
    </Router>
  );
}
