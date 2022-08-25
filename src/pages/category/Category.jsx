import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SERVER_BASE_URL } from "../../common/constants";
import PageTitle from "../components/page_title/PageTitle";
import ServiceCard from "../components/service_card/ServiceCard";

const Category = () => {
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState({});
  const { category_id } = useParams();
  useEffect(() => {
    const body = { category_id: category_id };
    axios
      .post(SERVER_BASE_URL + "api/service/single-category", body)
      .then((response) => {
        if (response.status === 200) {
          setCategory(response.data.data.category);
          setServices(response.data.data.services);
        }
      });
  }, [category_id]);

  if (services.length > 0) {
    return (
      <div>
        <PageTitle title={category.name} />
        <div className="row mt-4 container-fluid">
          {services.map((service, i) => {
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={i}>
                <ServiceCard service={service} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <PageTitle title={category.name} />
        <div className="row mt-4 container-fluid">
          <h3 className="text-center my-3">No Service Found</h3>
        </div>
      </div>
    );
  }
};

export default Category;
