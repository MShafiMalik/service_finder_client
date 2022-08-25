import PageTitle from "../components/page_title/PageTitle";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ROUTE_NAMES, SERVER_BASE_URL } from "../../common/constants";
import { useState } from "react";

const PersonalDetail = () => {
  const { email } = useParams();
  let navigate = useNavigate();
  const [imageInput, setImageInput] = useState("");
  const [imageError, setImageError] = useState(false);

  const yupValidation = Yup.object().shape({
    phone: Yup.string().required("Phone is mendatory"),
    city: Yup.string().required("City is mendatory"),
    state: Yup.string().required("State is mendatory"),
    country: Yup.string().required("Country is mendatory"),
    description: Yup.string().required("Description is mendatory"),
  });

  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const imageHandleChange = (e) => {
    setImageError(false);
    setImageInput(e.target.files[0]);
  };

  function onSubmit(body) {
    if (!imageInput) {
      setImageError(true);
      return false;
    }

    const formData = new FormData();
    formData.append("upload_preset", "usersimages");
    formData.append("file", imageInput);
    fetch("https://api.cloudinary.com/v1_1/dcwobtmhv/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const url = data.url;
        body = { ...body, image: url, email: email };
        axios
          .post(`${SERVER_BASE_URL}api/auth/add-personal-info`, body)
          .then((response) => {
            if (response.status === 200) {
              navigate(ROUTE_NAMES.HOME);
            }
          });
      });
  }

  return (
    <div className="container-fluid p-0">
      <PageTitle title="Personal Detail" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row container mx-auto my-3">
          <div className="col-md-6 form-group mb-4">
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              className={`form-control mt-2 ${
                errors.phone ? "is-invalid" : ""
              }`}
              {...register("phone")}
            />
            {errors.phone ? (
              <label className="text-danger mt-1">
                {" "}
                {errors.phone.message}
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 form-group mb-4">
            <label>City</label>
            <input
              type="text"
              name="city"
              className={`form-control mt-2 ${errors.city ? "is-invalid" : ""}`}
              {...register("city")}
            />
            {errors.city ? (
              <label className="text-danger mt-1"> {errors.city.message}</label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 form-group mb-4">
            <label>State</label>
            <input
              type="text"
              name="state"
              className={`form-control mt-2 ${
                errors.state ? "is-invalid" : ""
              }`}
              {...register("state")}
            />
            {errors.state ? (
              <label className="text-danger mt-1">
                {" "}
                {errors.state.message}
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 form-group mb-4">
            <label>Country</label>
            <input
              type="text"
              name="country"
              className={`form-control mt-2 ${
                errors.country ? "is-invalid" : ""
              }`}
              {...register("country")}
            />
            {errors.country ? (
              <label className="text-danger mt-1">
                {" "}
                {errors.country.message}
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-12 form-group mb-4">
            <label>Description</label>
            <textarea
              rows="3"
              name="description"
              className={`form-control mt-2 ${
                errors.description ? "is-invalid" : ""
              }`}
              {...register("description")}
            ></textarea>
            {errors.description ? (
              <label className="text-danger mt-1">
                {" "}
                {errors.description.message}
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 form-group mb-4">
            <label>Image</label>
            <input
              type="file"
              name="image"
              onChange={imageHandleChange}
              className="form-control mt-2"
            />
            {imageError === true ? (
              <label className="text-danger mt-1">Image is mendatory</label>
            ) : (
              ""
            )}
          </div>
          <div className="col-md-6 mt-auto mb-4">
            <div className="d-grid">
              <input
                type="submit"
                value="SUBMIT"
                className="btn theme-btn"
                style={{ float: "right" }}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetail;
