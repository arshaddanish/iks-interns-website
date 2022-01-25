import React from "react";
import About from "./about/About";
import Contact from "./contact/Contact";
import Initiatives from "./initiatives/Initiatives";
import Landing from "./landing/Landing";
import Services from "./services/Services";
import Team from "./team/Team";

export default function Home(props) {
  return (
    <div>
      <Landing />
      <main id="main">
        <About aboutRef={props.aboutRef} />
        <Services activitiesRef={props.activitiesRef} />
        <Initiatives initiativesRef={props.initiativesRef} />
        <Team />
        <Contact contactRef={props.contactRef} />
      </main>
    </div>
  );
}
