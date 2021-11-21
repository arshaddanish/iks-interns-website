import React from "react";
import About from "./about/About";
import Landing from "./landing/Landing";
import Services from "./services/Services";

export default function Home() {
  return (
    <div>
      <Landing />
      <main id="main">
        <About />
        <Services />
      </main>
    </div>
  );
}
