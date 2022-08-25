import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_BASE_URL } from "../../../common/constants";
import ServiceCard from "../service_card/ServiceCard";

const SimilarServices = (props) => {
  const [similarServices, setSimilarServices] = useState([]);

  useEffect(() => {
    if (props.categoryId) {
      const body = { category_id: props.categoryId };
      axios
        .post(SERVER_BASE_URL + "api/service/single-category", body)
        .then((response) => {
          if (response.status === 200) {
            setSimilarServices(response.data.data.services);
          }
        });
    }
  }, [props.categoryId]);

  return (
    <>
      <h4>Similar Services</h4>
      {similarServices.map((similarService, i) => {
        return similarService._id !== props.currentServiceId ? (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={i}>
            <ServiceCard service={similarService} />
          </div>
        ) : (
          ""
        );
      })}
    </>
  );
};

export default SimilarServices;
