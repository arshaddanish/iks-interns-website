import React from "react";

export default function TeamItem({ item }) {
  return (
    <div class="member" data-aos="zoom-in">
      <div class="member-img">
        <img src={item.toonImgUrl} class="img-fluid" alt="" />
        <img src={item.imgUrl} class="img-fluid original" alt="" />
      </div>
      <div class="member-info">
        <h4>
          {item.name} &nbsp;
          <a href={item.linkedin}>
            <i class="bi bi-linkedin"></i>
          </a>
        </h4>
        <span>{item.descr}</span>
      </div>
    </div>
  );
}
