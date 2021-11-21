import React from "react";
import "./services.scss";

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
          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
          >
            <div class="icon-box icon-box-pink">
              <div class="icon">
                <i class="bx bxl-dribbble"></i>
              </div>
              <h4 class="title">
                <a class="inactiveLink">Content Writing</a>
              </h4>
              <p class="description">
                We have a team of talented content writers capable of expressing
                their thoughts and ideas in an exquisite way to craft remarkable
                contents that can reach out to a wide audience.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div class="icon-box icon-box-cyan">
              <div class="icon">
                <i class="bx bx-file"></i>
              </div>
              <h4 class="title">
                <a class="inactiveLink">Web & Poster Designing</a>
              </h4>
              <p class="description">
                Our brilliant team of designers are handpicked and cut out for
                the task, to create designs that cover a whole galaxy of fields
                that visually please your eyes and garner the desired feelings.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div class="icon-box icon-box-green">
              <div class="icon">
                <i class="bx bx-tachometer"></i>
              </div>
              <h4 class="title">
                <a class="inactiveLink">Web Development</a>
              </h4>
              <p class="description">
                Web team was carefully trained and mentored to give your
                audience a taste of what you have to offer and enticing them to
                delve deeper for more.
              </p>
            </div>
          </div>

          <div
            class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div class="icon-box icon-box-blue">
              <div class="icon">
                <i class="bx bx-world"></i>
              </div>
              <h4 class="title">
                <a class="inactiveLink">Event Coordination</a>
              </h4>
              <p class="description">
                We interns manage the whole process of event management; from
                the planning stage, right through to running the event and
                carrying out the post-event evaluation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
