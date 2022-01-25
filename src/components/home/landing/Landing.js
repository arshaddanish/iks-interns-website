import React from "react";
import "./landing.scss";
import heroImg from "../../../assets/img/hero-img.png";
import { Link } from "react-router-dom";

export default function Landing(props) {
  const executeScroll = (e, ref) => {
    e.preventDefault();
    window.scrollTo(0, ref.current.offsetTop - 50);
  };

  return (
    <section id="hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <div class="text-center-div">
              <h1>
                A team of resourceful interns who assist to create perfection in
                every event.
              </h1>
              <h2>
                We are proud IEEE volunteers trained By IEEE Kerala Section to
                take a step further to professionalism.
              </h2>
              <Link
                to=""
                class="btn-get-started scrollto"
                onClick={(e) => executeScroll(e, props.aboutRef)}
              >
                About Us
              </Link>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2 hero-img">
            <img src={heroImg} class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
