import React from "react";
import "./activities.scss";
import { activitiesData } from "./data";
import ActivityItem from "./ActivityItem";

export default function Services(props) {
  return (
    <section class="services" ref={props.activitiesRef}>
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Activities</h2>
          <p>
            <span class="quote">
              "Great things in business is never done by a single person” -
              Steve Jobs.
            </span>
          </p>
          <p>
            We interns are committed to providing the best services. Following
            are our flagship services.
          </p>
        </div>

        <div class="row">
          {activitiesData.map((service, index) => (
            <ActivityItem
              key={index}
              icon={service.icon}
              title={service.title}
              content={service.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
