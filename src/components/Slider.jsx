import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "../styles/Slider.css";

import slider1 from "../assets/sliders/slider (1).png";
import slider2 from "../assets/sliders/slider (2).png";
import slider3 from "../assets/sliders/slider (3).png";
import slider4 from "../assets/sliders/slider (4).png";
import slider5 from "../assets/sliders/slider (5).png";
import slider6 from "../assets/sliders/slider (6).png";
import slider7 from "../assets/sliders/slider (7).png";
import slider8 from "../assets/sliders/slider (8).png";

const Slider = () => {
  return (
    <div className="container">
      <div className="row wrap-carousel">
        <div className="col-8 h-100 pr-1">
          <div
            id="carouselExampleIndicators"
            className="carousel slide h-100"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="5"
              ></li>
            </ol>
            <div className="carousel-inner h-100">
              <div class="carousel-item active h-100">
                <img src={slider1} class="d-block w-100 h-100" alt="..." />
              </div>
              <div class="carousel-item h-100">
                <img src={slider2} class="d-block w-100 h-100" alt="..." />
              </div>
              <div class="carousel-item h-100">
                <img src={slider3} class="d-block w-100 h-100" alt="..." />
              </div>
              <div class="carousel-item h-100">
                <img src={slider4} class="d-block w-100 h-100" alt="..." />
              </div>
              <div class="carousel-item h-100">
                <img src={slider5} class="d-block w-100 h-100" alt="..." />
              </div>
              <div class="carousel-item h-100">
                <img src={slider6} class="d-block w-100 h-100" alt="..." />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-4 h-100 pl-0">
          <div className="h-50">
            <img className="w-100 h-100" src={slider7} alt="Slider 5" />
          </div>
          <div className="h-50 pt-1">
            <img className="w-100 h-100" src={slider8} alt="Slider 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
