import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SERVER_BASE_URL } from "../../common/constants";
import "./ServiceDetail.scss";

const ServiceDetail = () => {
  const [service, setService] = useState({});
  const [images, setImages] = useState([]);
  const [packages, setPackages] = useState({
    basic: { name: "", description: "", price: "" },
    standard: { name: "", description: "", price: "" },
    premium: { name: "", description: "", price: "" },
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
        }
      });
  }, []);

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
    <div className="container mt-4">
      <div className="row">
        <h3 className="font-w-800 mb-5 text-center">Service Detail</h3>
        <div className="col-lg-8 mb-4">
          <div id="slider" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">{carousel_indicators}</div>
            <div className="carousel-inner border">{carousel_items}</div>
          </div>
          <h3 className="fw-bold my-4">{service.title}</h3>
          <h3>About this service</h3>
          <p className="font-w-600">{service.description}</p>
        </div>
        <div className="col-lg-4 mb-4">
          <ul className="nav nav-tabs nav-justified">
            <li className="nav-item">
              <a
                href="#basic"
                className="nav-link active font-w-700"
                data-bs-toggle="tab"
              >
                Basic
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#standard"
                className="nav-link font-w-700"
                data-bs-toggle="tab"
              >
                Standard
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#premium"
                className="nav-link font-w-700"
                data-bs-toggle="tab"
              >
                Premium
              </a>
            </li>
          </ul>
          <div className="tab-content pt-3 px-3 border border-top-0">
            <div className="tab-pane fade show active" id="basic">
              <h5>{packages.basic.name}</h5>
              <p>
                <small>{packages.basic.description}</small>
              </p>
              <h5 className="text-center font-w-600">
                ${packages.basic.price}
              </h5>
            </div>
            <div className="tab-pane fade" id="standard">
              <h5>{packages.standard.name}</h5>
              <p>
                <small>{packages.standard.description}</small>
              </p>
              <h5 className="text-center font-w-600">
                ${packages.standard.price}
              </h5>
            </div>
            <div className="tab-pane fade" id="premium">
              <h5>{packages.premium.name}</h5>
              <p>
                <small>{packages.premium.description}</small>
              </p>
              <h5 className="text-center font-w-600">
                ${packages.premium.price}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
