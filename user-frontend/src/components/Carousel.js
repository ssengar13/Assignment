import React, { useState } from "react";
import '../../node_modules/react-modal-video/css/modal-video.css';
import img1 from "../img/slider1.jpg";
import img2 from "../img/slider2.jpg";
import img3 from "../img/slider3.jpg";


const Carousel = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section id="hero" className="hero d-flex">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade fullpage-carousel"
          data-bs-ride="carousel"
          data-bs-interval="5000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 fullwidth-img bg-darkgray" alt="Slide 1" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-start">
                <h2 className="text-white">
                  Empowering Businesses, Enabling Growth.
                </h2>
                <p className="text-white text-center">
                  Partner with us for innovative strategies that transform your business.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 fullwidth-img" alt="Slide 2" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-start">
                <h2 className="text-white">Your Trusted Partner for Strategic Solutions.</h2>
                <p className="text-white">
                  Your growth is our mission; discover tailored solutions today.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100 fullwidth-img" alt="Slide 3" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-start">
                <h2 className="text-white">Tailored Solutions for Every Business Need.</h2>
                <p className="text-white">
                  From vision to success, we’re here to guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

    </>
  );
};

export default Carousel;
