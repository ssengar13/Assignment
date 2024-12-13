import React from "react";
import logo from "../img/logo.png";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from "react-scroll";

const InnerHeader = () => {
  //

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };


  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");


  //sticky header
  useEffect(() => {
    const selectHeader = document.querySelector("#header");
    if (selectHeader) {
      document.addEventListener("scroll", () => {
        window.scrollY > 80
          ? selectHeader.classList.add("sticked")
          : selectHeader.classList.remove("sticked");
      });
    }
  }, []);

  // mobile view menu
  const mobilemenu = (event) => {
    event.preventDefault();
    const mobileNavShow = document.querySelector(".mobile-nav-show");
    const mobileNavHide = document.querySelector(".mobile-nav-hide");
    mobileNavShow.classList.toggle("d-none");
    mobileNavHide.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("mobile-nav-active");
  };


  return (
    <>
      <header id="header" className="header fixed-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <Link to="/" className="logo" onClick={toTop}>
            <img
              src={logo}
              alt="BOP - Consultancy and Services"
              title="BOP - Consultancy and Services"
              style={{ width: '100px', height: 'auto' }}
            />
          </Link>
          <span onClick={mobilemenu}>
            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"
            ></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
          </span>
          <nav id="navbar" className="navbar">
            <ul onClick={mobilemenu}>
              <li >
                <Link to="/" className={splitLocation[1] === "" ? "active" : ""}> Home</Link>
              </li>
              <li>
                <Link to="/about" className={splitLocation[1] === "about" ? "active" : ""}> About Us</Link>
              </li>
              <li>
                <Link to="/services" className={splitLocation[1] === "services" ? "active" : ""}> Services</Link>
              </li>
              <li>
                <Link to="/blogs" className={splitLocation[1] === "blogs" ? "active" : ""}> Blog</Link>
              </li>
              <li>
                <Link to="/careers" className={splitLocation[1] === "careers" ? "active" : ""}> Careers</Link>
              </li>
              <li>
                <Link to="/contact" className={splitLocation[1] === "contact" ? "active" : ""}> Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default InnerHeader;
