import { useState, useEffect } from "react";
import Autocomplete from "react-google-autocomplete";
import axios from "axios";
import {
  GOOGLE_MAP_API_KEY,
  ROUTE_NAMES,
  SERVER_BASE_URL,
} from "../../../common/constants";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [validationErrors, setValidationErrors] = useState({
    keyword: false,
    category: false,
    address: false,
  });
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [keyword, setKeyword] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      keyword: keyword,
      category: categoryId,
      latitude: latitude,
      longitude: longitude,
    };

    if (!data.keyword) {
      setValidationErrors((errors) => ({ ...errors, keyword: true }));
    }
    if (!data.category) {
      setValidationErrors((errors) => ({ ...errors, category: true }));
    }
    if (!data.latitude || !data.longitude) {
      setValidationErrors((errors) => ({ ...errors, address: true }));
    }

    if (data.latitude && data.longitude && data.category && data.keyword) {
      navigate(
        `${ROUTE_NAMES.SEARCH_SERVICES}/${data.keyword}/${data.category}/${data.latitude}/${data.longitude}`
      );
    }
  };

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
        <form
          onSubmit={handleSubmit}
          action="/search-services/sdfsd/asdfasdf/asdfasfd"
        >
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3">
              <input
                type="text"
                name="keyword"
                className="form-control"
                placeholder="Keyword"
                value={keyword}
                onChange={(event) => {
                  setValidationErrors((errors) => ({
                    ...errors,
                    keyword: false,
                  }));
                  setKeyword(event.target.value);
                }}
              />
              {validationErrors.keyword === true ? (
                <label className="text-danger mt-1">
                  Keyword is mendatory!
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <select
                name="category"
                className="form-control"
                value={categoryId}
                onChange={(event) => {
                  setValidationErrors((errors) => ({
                    ...errors,
                    category: false,
                  }));
                  setCategoryId(event.target.value);
                }}
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
              {validationErrors.category === true ? (
                <label className="text-danger mt-1">
                  Category is mendatory!
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <Autocomplete
                apiKey={GOOGLE_MAP_API_KEY}
                options={{
                  types: ["(regions)"],
                }}
                onPlaceSelected={(place) => {
                  setValidationErrors((errors) => ({
                    ...errors,
                    address: false,
                  }));
                  setLatitude(place.geometry.location.lat());
                  setLongitude(place.geometry.location.lng());
                }}
                className="form-control"
              />
              {validationErrors.address === true ? (
                <label className="text-danger mt-1">
                  Address is mendatory!
                </label>
              ) : (
                ""
              )}
            </div>
            <div className="col-md-3 col-sm-6 mb-3">
              <input
                type="submit"
                className="btn theme-btn full-width-btn float-end"
                value="Search"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
