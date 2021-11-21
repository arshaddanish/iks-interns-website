import React from "react";
import "./about.scss";
import mintMeetImg from "../../../assets/img/mint-meet.png";

export default function About() {
  return (
    <section id="about" class="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 my-auto" data-aos="zoom-in">
            <img src={mintMeetImg} class="img-fluid" alt="" />
          </div>
          <div
            class="col-lg-7 d-flex flex-column justify-contents-center"
            data-aos="fade-up"
          >
            <div class="content pt-4 pt-lg-0">
              <h3>About Us</h3>

              <p>
                The IKS Interns Team was born with the introduction of a new
                initiative by IEEE Kerala Section to select a group of
                resourceful interns to its Electronic Communications
                Coordination team. As a result, a team of sixteen interns was
                formed, headed by Ms. Sarada Jayakrishnan, Chair, IEEE Kerala
                Section, and handled by Mr. Alan Mathew, ECC, IEEE Kerala
                Section. Divided into three groups - Web Team, Design Team, and
                Content Team - the Interns Team consists of students from the
                different Student Branches of the Section. Conceived from an
                idea aimed at training and mentoring a selected number of
                students and transforming them into valuable volunteers
                determined to work for the betterment of the Section, the
                Interns Team has considerably grown to handle tasks within a
                professional network. In a span of seven months, the team has
                been successful in completing various projects and Section
                related activities, showcasing enhanced skillset, attained as a
                result of brilliant mentorship and rigorous team management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
