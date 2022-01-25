import React from "react";
import "./team.scss";
import {
  TeamDescription,
  ContentTeamData,
  MentorsData,
  DesignTeamData,
  WebTeamData,
} from "./data";
import TeamItem from "./TeamItem";

export default function Team() {
  return (
    <section id="team" class="team section-bg team-x">
      <div class="container mentor-team">
        <div class="section-title" data-aos="fade-up">
          <h2>{TeamDescription.mentors.title}</h2>
          <p>{TeamDescription.mentors.desc}</p>
        </div>

        <div class="members">
          {MentorsData.map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div class="container content-team">
        <div class="section-title" data-aos="fade-up">
          <h2>{TeamDescription.content.title}</h2>
          <p>{TeamDescription.content.desc}</p>
        </div>

        <div class="members">
          {ContentTeamData.map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div class="container design-team">
        <div class="section-title" data-aos="fade-up">
          <h2>{TeamDescription.design.title}</h2>
          <p>{TeamDescription.design.desc}</p>
        </div>

        <div class="members">
          {DesignTeamData.map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>
      </div>

      <div class="container web-team">
        <div class="section-title" data-aos="fade-up">
          <h2>{TeamDescription.web.title}</h2>
          <p>{TeamDescription.web.desc}</p>
        </div>

        <div class="members">
          {WebTeamData.map((item, index) => (
            <TeamItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
