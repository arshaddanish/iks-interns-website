import React from "react";
import About from "./about/About";
import Landing from "./landing/Landing";
import Portfolio from "./portfolio/Portfolio";
import Services from "./services/Services";
import Team from "./team/Team";

export default function Home() {
  return (
    <div>
      <Landing />
      <main id="main">
        <About />
        <Services />
        <Portfolio />
        <Team />
      </main>
    </div>
  );
}
