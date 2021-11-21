import React from "react";

export default function PortfolioItem({ imgUrl, title, liveUrl, dtlRoute }) {
  return (
    <div class="col-lg-4 col-md-6 portfolio-item">
      <div class="portfolio-wrap">
        <img src={imgUrl} alt="" />
        <div class="portfolio-info">
          <h4 style={{ whiteSpace: "pre" }}>{title}</h4>
        </div>
        <div class="portfolio-links">
          {liveUrl && (
            <a href={liveUrl} class="portfolio-lightbox">
              Visit
            </a>
          )}
          <a href={dtlRoute} title="More Details">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
