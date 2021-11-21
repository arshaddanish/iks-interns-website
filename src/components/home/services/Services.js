import React from "react";
import "./services.scss";
import { servicesData } from "./data";
import ServiceItem from "./ServiceItem";

export default function Services() {
  return (
    <section id="services" class="services">
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
          {servicesData.map((service, index) => (
            <ServiceItem
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
