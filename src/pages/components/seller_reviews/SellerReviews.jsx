import React from "react";
import "./seller_reviews.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const seller_reviews = [
  {
    id: 1,
    name: "john doe",
    location: "Multan",
    description:
      "Moeez turned around a 10-page site in only a few days! When other people said no, Moeez said yes and did the job well! I would highly recommend her and will hire her again.",
    rating: 5,
  },
  {
    id: 2,
    name: "john doe",
    location: "Multan",
    description:
      "Moeez turned around a 10-page site in only a few days! When other people said no, Moeez said yes and did the job well! I would highly recommend her and will hire her again.",
    rating: 5,
  },
  {
    id: 2,
    name: "john doe",
    location: "Multan",
    description:
      "Moeez turned around a 10-page site in only a few days! When other people said no, Moeez said yes and did the job well! I would highly recommend her and will hire her again.",
    rating: 5,
  },
];

const SellerReviews = () => {
  return (
    <>
      <div className="row">
        {seller_reviews.map((reviews) => {
          return (
            <div className="card mb-3" key={reviews.id}>
              <div className="card-header border-0 bg-white">
                <span>
                  <div className="ratingstars">
                    <ul>
                      <li>
                        <h5 className="fw-bold me-1">{reviews.name}</h5>
                      </li>
                      <li className="me-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="rating-color"
                        />
                      </li>
                      <li className="me-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="rating-color"
                        />
                      </li>
                      <li className="me-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="rating-color"
                        />
                      </li>
                      <li className="me-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="rating-color"
                        />
                      </li>
                      <li className="me-1">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="rating-color"
                        />
                      </li>
                      <li>
                        <span className="fw-bold rating-color">
                          {reviews.rating}
                        </span>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="card-body">
                <p className="card-text">{reviews.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SellerReviews;
