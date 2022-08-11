import "./HeroSlider.scss";

import { Link } from "react-router-dom";

const HeroSlider = () => {
  const slider_data = [
    {
      id: 1,
      title: "Home Maintenance and Services for you",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione velit deleniti illo",
      image: "assets/images/home_slider/bg1.jpg",
    },
    {
      id: 2,
      title: "We are Professional and provide repair Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione velit deleniti illo",
      image: "assets/images/home_slider/bg2.jpg",
    },
    {
      id: 3,
      title: "The Best company to provide home Services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione velit deleniti illo",
      image: "assets/images/home_slider/bg3.jpg",
    },
    {
      id: 4,
      title: "The Most targetted cleaning services",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione velit deleniti illo",
      image: "assets/images/home_slider/bg4.jpg",
    },
  ];

  const carousel_indicators = slider_data.map((_item, i) => {
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

  const carousel_items = slider_data.map((item, i) => {
    if (i === 0) {
      return (
        <div className="carousel-item active" key={i}>
          <img src={item.image} alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3>{item.title}</h3>
            <div className="row">
              <div className="col-6 mx-auto">
                <Link
                  to="/about-us"
                  className="btn theme-btn theme-btn-dark slider-btn"
                >
                  Read More
                </Link>
              </div>
              <div className="col-6 mx-auto">
                <Link
                  to="/contact-us"
                  className="btn theme-btn-outline slider-btn"
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
          <img src={item.image} alt="Los Angeles" className="d-block w-100" />
          <div className="carousel-caption">
            <h3>{item.title}</h3>
            <div className="row mt-4">
              <div className="col-6">
                <Link
                  to="/contactus"
                  className="btn theme-btn theme-btn-dark slider-btn"
                >
                  Read More
                </Link>
              </div>
              <div className="col-6">
                <Link
                  to="/contactus"
                  className="btn theme-btn-outline slider-btn"
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
