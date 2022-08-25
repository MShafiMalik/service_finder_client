import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SERVER_BASE_URL } from "../../common/constants";
import PageTitle from "../components/page_title/PageTitle";
import "./ServiceDetail.scss";
import SellerReviews from "../components/seller_reviews/SellerReviews";
import ReviewCardsContainer from "../components/review_cards_container/ReviewCardsContainer";
import Packages from "./Packages";
import SimilarServices from "../components/similar_services/SimilarServices";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const [categoryId, setCategoryId] = useState("");
  const [images, setImages] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [packages, setPackages] = useState({
    basic: { name: "", description: "", features: [], price: "" },
    standard: { name: "", description: "", features: [], price: "" },
    premium: { name: "", description: "", features: [], price: "" },
  });
  const { service_id } = useParams();
  useEffect(() => {
    const body = { service_id: service_id };
    axios
      .post(SERVER_BASE_URL + "api/service/single-service", body)
      .then((response) => {
        if (response.status === 200) {
          setService(response.data.data);
          setImages(response.data.data.images);
          setPackages(response.data.data.packages);
          setReviews(response.data.data.reviews);
          setCategoryId(response.data.data.category._id);
        }
      });
  }, [service_id]);

  const carousel_indicators = images.map((_image, i) => {
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

  const carousel_items = images.map((image, i) => {
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
    <>
      <PageTitle title="Service Detail" />
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-8 mb-4">
            <div id="slider" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">{carousel_indicators}</div>
              <div className="carousel-inner border">{carousel_items}</div>
            </div>
            <div className="d-flex mt-3">
              <img
                src={service.seller?.image}
                width="50"
                height="50"
                alt="seller"
                style={{ borderRadius: "50%" }}
              />
              <p className="my-auto ms-2 font-w-700">
                {`${service.seller?.firstname} ${service.seller?.lastname}`}
              </p>
              <div className="my-auto ms-2">
                <SellerReviews reviews={service.seller?.reviews} />
              </div>
            </div>
            <h3 className="fw-bold my-4">{service.title}</h3>
            <h3>About this service</h3>
            <div className="card px-3 py-2">
              <p className="font-w-600 m-0">{service.description}</p>
            </div>
            <div className="left-packages my-5">
              <Packages packages={packages} pre_id="left" />
            </div>
            <div className="my-5">
              <ReviewCardsContainer reviews={reviews} />
            </div>
          </div>
          <div className="col-lg-4 mb-4">
            <div className="right-packages">
              <Packages packages={packages} pre_id="right" />
            </div>
          </div>
        </div>
        <div className="row">
          <SimilarServices
            categoryId={categoryId}
            currentServiceId={service._id}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
