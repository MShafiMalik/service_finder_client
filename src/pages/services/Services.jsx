import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../common/constants";
import PageTitle from "../components/page_title/PageTitle";
import ServiceCard from "../components/service_card/ServiceCard";
import "./Services.scss";

const Services = () => {
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
    <section className="container-fluid p-0">
      <PageTitle title="Our services" />
      <div className="row container-fluid mt-4">
        {services.map((service, i) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
              <ServiceCard service={service} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
