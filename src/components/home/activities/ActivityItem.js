import React from "react";
import { Link } from "react-router-dom";

export default function ActivityItem({ icon, title, content }) {
  return (
    <div
      class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0"
      data-aos="zoom-in"
    >
      <div class="icon-box icon-box-blue">
        <div class="icon">
          <i class={icon}></i>
        </div>
        <h4 class="title">
          <Link to="" class="inactiveLink" onClick={(e) => e.preventDefault()}>
            {title}
          </Link>
        </h4>
        <p class="description">{content}</p>
      </div>
    </div>
  );
}
