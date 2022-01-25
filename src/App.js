import React, { Fragment, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Careers from "./components/careers/Careers";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";
import Team2021 from "./components/team/team2021/Team2021";
import Reports2021 from "./components/resources/reports2021/Reports2021";
import ScrollToTop from "./utilities/ScrollToTop";
import IntitiativeDetails from "./components/intitiativeDetails/IntitiativeDetails";

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

            <Route path="/team2021" element={<Team2021 />}></Route>
            <Route path="/careers" element={<Careers />}></Route>
            <Route path="/reports2021" element={<Reports2021 />}></Route>
            <Route path="/reports2022" element={<IntitiativeDetails />}></Route>
          </Routes>
        </ScrollToTop>

        <Footer />
      </Fragment>
    </Router>
  );
}
