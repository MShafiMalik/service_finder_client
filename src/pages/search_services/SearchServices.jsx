import "./SearchServices.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { SERVER_BASE_URL } from "../../common/constants";
import PageTitle from "../components/page_title/PageTitle";
import ServiceCard from "../components/service_card/ServiceCard";
import { useParams } from "react-router-dom";

const SearchServices = () => {
  const [services, setServices] = useState([]);
  const { keyword, category_id, latitude, longitude } = useParams();

  useEffect(() => {
    const body = {
      keyword: keyword,
      category_id: category_id,
      latitude: latitude,
      longitude: longitude,
    };
    axios
      .post(SERVER_BASE_URL + "api/service/search", body)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
          setServices(response.data.data);
        }
      });
  }, [keyword, category_id, latitude, longitude]);

  return (
    <div className="container-fluid p-0">
      <PageTitle title="Nearby Services" />
      <div className="row container-fluid mt-4">
        {services.map((service, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={i}>
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchServices;
