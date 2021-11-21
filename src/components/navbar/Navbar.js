import React from "react";
import "./navbar.scss";
import logo from "../../assets/img/logo.png";

export default function Navbar() {
  return (
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <div class="logo me-auto">
          <h1>
            <a href="index.html">
              <img src={logo} alt="" class="img-fluid" />
            </a>
          </h1>
        </div>

        <nav id="navbar" class="navbar order-last order-lg-0">
          <ul>
            <li>
              <a class="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>

            <li>
              <a class="nav-link scrollto" href="#about">
                About Us
              </a>
            </li>
            <li>
              <a class="nav-link scrollto" href="#services">
                Activities
              </a>
            </li>
            <li>
              <a class="nav-link scrollto " href="#portfolio">
                Portfolio
              </a>
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
              <a class="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
