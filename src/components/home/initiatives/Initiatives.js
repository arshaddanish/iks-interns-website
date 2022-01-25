import React from "react";
import "./initiatives.scss";
import { intitiativesData } from "./data";
import InitiativeItem from "./InitiativeItem";

export default function Initiatives() {
  return (
    <section id="portfolio" class="portfolio section-bg">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>
            Over the duration of time, the Interns Team has come forward with
            unique ideas followed by creative undertaking and successful
            implementation of various projects under the Section. Here is a peek
            into a few of our finest works till date.
          </p>
        </div>

        <div
          class="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {intitiativesData.map((item, index) => (
            <InitiativeItem
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              liveUrl={item.liveUrl}
              dtlRoute={item.dtlRoute}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
