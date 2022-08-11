import { Link } from "react-router-dom";
import "./ServiceCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = (props) => {
  let rating_count = 0;
  let rating_sum = 0;
  let avg_rating;
  if (props.service.seller.reviews) {
    rating_count = props.service.seller.reviews.length;
    props.service.seller.reviews.forEach((review) => {
      rating_sum += review.rating;
    });
    if (rating_sum > 0) {
      avg_rating = (rating_sum / rating_count).toFixed(1);
    } else {
      avg_rating = 0;
    }
  }

  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.round(avg_rating)) {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          className="rating-color"
          style={{ marginTop: "2px" }}
          key={i}
        />
      );
    } else {
      stars.push(
        <FontAwesomeIcon
          icon={faStar}
          className="no-rating-color"
          style={{ marginTop: "2px" }}
          key={i}
        />
      );
    }
  }

  const carousel_indicators = props.service.images.map((_image, i) => {
    if (i === 0) {
      return (
        <button
          key={i}
          type="button"
          data-bs-target={`#slider${props.service._id}`}
          data-bs-slide-to={i}
          className="active"
        ></button>
      );
    } else {
      return (
        <button
          key={i}
          type="button"
          data-bs-target={`#slider${props.service._id}`}
          data-bs-slide-to={i}
        ></button>
      );
    }
  });

  const carousel_items = props.service.images.map((image, i) => {
    if (i === 0) {
      return (
        <div className="carousel-item active" key={i}>
          <img src={image} alt="Los Angeles" className="d-block w-100" />
        </div>
      );
    } else {
      return (
        <div className="carousel-item" key={i}>
          <img src={image} alt="Los Angeles" className="d-block w-100" />
        </div>
      );
    }
  });

  return (
    <div className="card service-card">
      <div
        id={`slider${props.service._id}`}
        className="carousel slide"
        data-interval="false"
      >
        <div className="carousel-indicators">{carousel_indicators}</div>
        <div className="carousel-inner">{carousel_items}</div>
      </div>
      <div className="card-body">
        <div className="d-flex mb-4">
          <img
            src={props.service.seller.image}
            className="provider_img"
            alt="Provider"
          />
          <Link
            to={`/seller/${props.service.seller._id}`}
            className="card-title app-link my-auto ms-2"
          >
            {props.service.seller.firstname}
          </Link>
        </div>
        <div className="d-flex">
          {stars}
          <span className="ms-1 rating-color">
            {avg_rating === 0 ? "0" : avg_rating}
          </span>
          <span className="ms-1">({rating_count})</span>
        </div>
        <Link
          to={`/service/${props.service._id}`}
          className="card-title app-link"
        >
          {props.service.title}
        </Link>
        <p className="card-text text-end mt-3 font-w-700">
          Price: {props.service.packages.basic.price}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
