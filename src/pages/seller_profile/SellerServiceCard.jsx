import { Link } from "react-router-dom";
import "./SellerServiceCard.scss";
import SellerReviews from "../components/seller_reviews/SellerReviews";
import { ROUTE_NAMES } from "../../common/constants";

const SellerServiceCard = (props) => {
  const reviews = props?.service.reviews;

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
    <div className="card seller-service-card">
      <div
        id={`slider${props.service._id}`}
        className="carousel slide"
        data-interval="false"
      >
        <div className="carousel-indicators">{carousel_indicators}</div>
        <div className="carousel-inner">{carousel_items}</div>
      </div>
      <div className="card-body">
        <div className="d-flex">
          <SellerReviews reviews={reviews} />
        </div>
        <Link
          to={`${ROUTE_NAMES.SERVICE_DETAIL}/${props.service._id}`}
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

export default SellerServiceCard;
