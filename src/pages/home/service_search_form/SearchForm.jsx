import { useState, useEffect } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_BASE_URL } from "../../../common/constants";

const SearchForm = () => {
  const [inputs, setInputs] = useState({});
  const [categories, setCategories] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const { ref } = usePlacesWidget({
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options: {
      types: ["(regions)"],
    },
  });

  useEffect(() => {
    axios({
      method: "get",
      url: SERVER_BASE_URL + "api/category/all",
    }).then(function (response) {
      if (response.statusText === "OK") {
        setCategories(response.data.data);
      }
    });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center font-w-700">Find Local Service</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3">
              <input
                type="text"
                name="keyword"
                className="form-control"
                placeholder="Keyword"
                value={inputs.keyword || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <select
                name="category"
                className="form-control"
                value={inputs.category || ""}
                onChange={handleChange}
              >
                <option value="">Choose Category...</option>
                {categories.map((category, i) => {
                  return (
                    <option value={category._id} key={i}>
                      {category.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <input
                type="text"
                name="address"
                className="form-control"
                placeholder="Address"
                ref={ref}
                value={inputs.address || ""}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3 col-sm-6 mb-3 d-grid">
              <input
                type="submit"
                className="btn btn-block theme-btn float-end"
                value="Search"
              />
              {/* <Link to="/map" className="btn btn-block theme-btn float-end">
                Search
              </Link> */}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
