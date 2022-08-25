import "./HeroSlider.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ROUTE_NAMES, SERVER_BASE_URL } from "../../../common/constants";

const HeroSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    axios.get(SERVER_BASE_URL + "api/hero-slider/all").then((response) => {
      if (response.status === 200) {
        setSlides(response.data.data);
      }
    });
  }, []);

  const carousel_indicators = slides.map((_slide, i) => {
    if (i === 0) {
      return (
        <button
          key={i}
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to={i}
          className="active"
        ></button>
      );
    } else {
      return (
        <button
          key={i}
          type="button"
          data-bs-target="#slider"
          data-bs-slide-to={i}
        ></button>
      );
    }
  });

  const carousel_items = slides.map((slide, i) => {
    if (i === 0) {
      return (
        <div className="carousel-item active" key={i}>
          <img src={slide.image} alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3>{slide.title}</h3>
            <div className="row">
              <div className="col-6 mx-auto">
                <Link
                  to={ROUTE_NAMES.ABOUT_US}
                  className="btn theme-btn theme-btn-dark"
                >
                  Read More
                </Link>
              </div>
              <div className="col-6 mx-auto">
                <Link
                  to={ROUTE_NAMES.CONTACT_US}
                  className="btn theme-btn-outline"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="carousel-item" key={i}>
          <img src={slide.image} alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3>{slide.title}</h3>
            <div className="row mt-3">
              <div className="col-6 mx-auto">
                <Link
                  to={ROUTE_NAMES.ABOUT_US}
                  className="btn theme-btn theme-btn-dark"
                >
                  Read More
                </Link>
              </div>
              <div className="col-6 mx-auto">
                <Link
                  to={ROUTE_NAMES.CONTACT_US}
                  className="btn theme-btn-outline"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  return (
    <div id="slider" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">{carousel_indicators}</div>
      <div className="carousel-inner">{carousel_items}</div>
    </div>
  );
};

export default HeroSlider;
