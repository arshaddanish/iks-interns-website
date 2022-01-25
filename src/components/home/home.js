import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Initiatives from "./initiatives/Initiatives";
import Landing from "./landing/Landing";
import Activities from "./activities/Activities";

export default function Home(props) {
  return (
    <div>
      <Landing aboutRef={props.aboutRef} />
      <main id="main">
        <About aboutRef={props.aboutRef} />
        <Activities activitiesRef={props.activitiesRef} />
        <Initiatives initiativesRef={props.initiativesRef} />
        <Contact contactRef={props.contactRef} />
      </main>
    </div>
  );
}
