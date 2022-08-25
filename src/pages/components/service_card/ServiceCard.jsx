import { Link } from "react-router-dom";
import "./ServiceCard.scss";
import SellerReviews from "../seller_reviews/SellerReviews";
import { ROUTE_NAMES } from "../../../common/constants";

const ServiceCard = (props) => {
  const reviews = props?.service.seller.reviews;

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
            to={`${ROUTE_NAMES.SELLER}/${props.service.seller._id}`}
            className="card-title app-link my-auto ms-2"
          >
            {props.service.seller.firstname}
          </Link>
        </div>
        <div className="mb-2">
          <SellerReviews reviews={reviews} />
        </div>
        <Link
          to={`${ROUTE_NAMES.SERVICE_DETAIL}/${props.service._id}`}
          className="card-title app-link"
        >
          {props.service.title}
        </Link>
        {props.service.distance ? (
          <div className="mt-3">
            <p className="float-start mb-0 font-w-700">
              Distance: {props.service.distance}
            </p>
            <p className="card-text text-end font-w-700">
              Price: {props.service.packages.basic.price}
            </p>
          </div>
        ) : (
          <p className="card-text text-end mt-3 font-w-700">
            Price: {props.service.packages.basic.price}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
