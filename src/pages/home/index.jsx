import "./Home.scss";
import SearchForm from "./service_search_form/SearchForm";
import CategorySlider from "./category_slider/CategorySlider";
import HeroSlider from "./hero_slider/HeroSlider";
import ServiceCard from "../components/service_card/ServiceCard";
import { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_BASE_URL } from "../../common/constants";

const HomePage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: SERVER_BASE_URL + "api/service/all",
    }).then(function (response) {
      if (response.statusText === "OK") {
        setServices(response.data.data);
      }
    });
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="mb-5">
        <HeroSlider />
      </div>

      <div className="container mt-5">
        <SearchForm />
      </div>

      <div className="container mt-5">
        <h3 className="font-w-600">Categories</h3>
        <CategorySlider />
      </div>

      <div className="container mt-5">
        <h3 className="font-w-600">Services</h3>
        <div className="row container-fluid mt-4 p-0">
          {services.map((service, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
