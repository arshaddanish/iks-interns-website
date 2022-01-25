import React, { Fragment, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./app.scss";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";
import ScrollToTop from "./utilities/ScrollToTop";

export default function App() {
  const aboutRef = useRef(null);
  const activitiesRef = useRef(null);
  const initiativesRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Router>
      <Fragment>
        <Navbar
          aboutRef={aboutRef}
          activitiesRef={activitiesRef}
          initiativesRef={initiativesRef}
          contactRef={contactRef}
        />

        <ScrollToTop>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  aboutRef={aboutRef}
                  activitiesRef={activitiesRef}
                  initiativesRef={initiativesRef}
                  contactRef={contactRef}
                />
              }
            ></Route>
          </Routes>
        </ScrollToTop>

        <Footer />
      </Fragment>
    </Router>
  );
}
