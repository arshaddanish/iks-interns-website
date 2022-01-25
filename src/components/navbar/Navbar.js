import React from "react";
import "./navbar.scss";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const executeScroll = (e, ref) => {
    e.preventDefault();
    window.scrollTo(0, ref.current.offsetTop - 50);
  };

  return (
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <div class="logo me-auto">
          <h1>
            <Link to="/">
              <img src={logo} alt="" class="img-fluid" />
            </Link>
          </h1>
        </div>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link to="/" class="nav-link scrollto active">
                Home
              </Link>
            </li>

            <li>
              <Link
                to=""
                class="nav-link scrollto"
                onClick={(e) => executeScroll(e, props.aboutRef)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="nav-link scrollto"
                onClick={(e) => executeScroll(e, props.activitiesRef)}
              >
                Activities
              </Link>
            </li>
            <li>
              <Link
                to=""
                class="nav-link scrollto"
                onClick={(e) => executeScroll(e, props.initiativesRef)}
              >
                Initiatives
              </Link>
            </li>
            <li>
              <a class="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li class="dropdown">
              <a href="/">
                <span>Download Center</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a class="nav-link scrollto" href="reports.html">
                    Monthly Reports
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to=""
                class="nav-link scrollto"
                onClick={(e) => executeScroll(e, props.contactRef)}
              >
                Contact
              </Link>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
