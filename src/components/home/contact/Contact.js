import React from "react";
import "./contact.scss";

export default function Contact(props) {
  return (
    <section class="contact section-bg" ref={props.contactRef}>
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div class="row">
          <div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>IEEE Kerala Section, Kerala, India</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>interns@ieeekerala.org</p>
              </div>
              <br />

              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6781.811818178824!2d76.94284390614956!3d8.491448868217162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bbbca9746295%3A0xf35a1efd3641eb9b!2sIEEE%20Kerala%20Section!5e0!3m2!1sen!2sin!4v1630222624132!5m2!1sen!2sin"
                frameborder="0"
                style={{ border: 0, width: "100%", height: "290px" }}
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div
            class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch"
            data-aos="fade-up"
          >
            <form
              action="https://formspree.io/f/xgerdepr"
              method="post"
              class="php-email-form"
              autocomplete="off"
            >
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    class="form-control"
                    id="name"
                    required
                  />
                </div>
                <div class="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name">Subject</label>
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <label for="name">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Sending</div>
                <div class="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div class="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
