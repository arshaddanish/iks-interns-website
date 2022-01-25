import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./footer.scss";

export default function Footer(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const executeScroll = (e, ref) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo(0, ref.current.offsetTop - 50);
    }
  };

  return (
    <React.Fragment>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-4 col-md-6">
                <div class="footer-info">
                  <h3>IKS Interns</h3>
                  <p>
                    IEEE Kerala Section,
                    <br />
                    Kerala, India.
                    <br />
                    <br />
                    <strong>Email:</strong> interns@ieeekerala.org
                    <br />
                    <br />
                  </p>
                  <div class="social-links mt-3">
                    <a
                      href="https://www.linkedin.com/company/ieeekerala/mycompany/"
                      class="linkedin"
                    >
                      <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/IEEEKerala" class="twitter">
                      <i class="bx bxl-twitter"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/IEEEKerala"
                      class="facebook"
                    >
                      <i class="bx bxl-facebook"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/ieeekerala/"
                      class="instagram"
                    >
                      <i class="bx bxl-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="/" class="scrollto">
                      Home
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link
                      to=""
                      class="scrollto"
                      onClick={(e) => executeScroll(e, props.aboutRef)}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link
                      to=""
                      class="scrollto"
                      onClick={(e) => executeScroll(e, props.activitiesRef)}
                    >
                      Activities
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link
                      to=""
                      class="scrollto"
                      onClick={(e) => executeScroll(e, props.initiativesRef)}
                    >
                      Initiatives
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="/team2021" class="scrollto">
                      Team
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-4 col-md-6 footer-links">
                <h4>Our Activities</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="" class="inactiveLink" onClick={e => e.preventDefault()}>
                      Content Writing
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="" class="inactiveLink" onClick={e => e.preventDefault()}>
                      Poster Design
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="" class="inactiveLink" onClick={e => e.preventDefault()}>
                      Web Design
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="" class="inactiveLink" onClick={e => e.preventDefault()}>
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="" class="inactiveLink" onClick={e => e.preventDefault()} onClick={e => e.preventDefault()}>
                      Event Coordination
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <strong>
              <span>IKS Interns</span>
            </strong>
            . All Rights Reserved.
          </div>
          <div class="credits">
            Developed by <Link to="/">IKS Interns.</Link>
          </div>
        </div>
      </footer>
      <Link
        to="/"
        class="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </Link>
    </React.Fragment>
  );
}
