import "./Registration.scss";
import axios from "axios";
import { SERVER_BASE_URL } from "../../common/constants";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTE_NAMES } from "../../common/constants";

const Signup = () => {
  let navigate = useNavigate();

  const yupValidation = Yup.object().shape({
    firstname: Yup.string().required("First Name is mendatory"),
    lastname: Yup.string().required("Last Name is mendatory"),
    email: Yup.string().required("Email is mendatory").email(),
    password: Yup.string()
      .required("Password is mendatory")
      .min(8, "Enter minimum 8 characters")
      .max(15, "Enter maximum 15 characters"),
    password_confirmation: Yup.string()
      .required("Confirm Password is mendatory")
      .min(8, "Enter minimum 8 characters")
      .max(15, "Enter maximum 15 characters")
      .oneOf(
        [Yup.ref("password"), null],
        "Confirm Passwords must match with Password"
      ),
    role: Yup.string().required("Role Type is mendatory"),
  });

  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(body) {
    axios.post(`${SERVER_BASE_URL}api/auth/signup`, body).then((response) => {
      if (response.status === 200) {
        console.log(response.data.data.email);
        toast.success("Signup Successfull!", {
          autoClose: 2000,
        });
        navigate(`${ROUTE_NAMES.VERIFY_EMAIL}/${response.data.data.email}`);
      }
    });
  }

  return (
    <div className="container reg-contain">
      <h2 className="font-w-700 text-center">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            className={`form-control mt-2 ${
              errors.firstname ? "is-invalid" : ""
            }`}
            {...register("firstname")}
          />
          {errors.firstname ? (
            <label className="text-danger mt-1">
              {" "}
              {errors.firstname.message}
            </label>
          ) : (
            ""
          )}
        </div>

        <div className="form-group mb-4">
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            className={`form-control mt-2 ${
              errors.lastname ? "is-invalid" : ""
            }`}
            {...register("lastname")}
          />
          {errors.lastname ? (
            <label className="text-danger mt-1">
              {" "}
              {errors.lastname.message}
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mb-4">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className={`form-control mt-2 ${errors.email ? "is-invalid" : ""}`}
            {...register("email")}
          />
          {errors.email ? (
            <label className="text-danger mt-1"> {errors.email.message}</label>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className={`form-control mt-2 ${
              errors.password ? "is-invalid" : ""
            }`}
            {...register("password")}
          />
          {errors.password ? (
            <label className="text-danger mt-1">
              {" "}
              {errors.password.message}
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mb-4">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password_confirmation"
            className={`form-control mt-2 ${
              errors.password_confirmation ? "is-invalid" : ""
            }`}
            {...register("password_confirmation")}
          />
          {errors.password_confirmation ? (
            <label className="text-danger mt-1">
              {errors.password_confirmation.message}
            </label>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mb-4">
          <label>Role Type</label>
          <select
            name="role"
            className={`form-control mt-2 ${errors.role ? "is-invalid" : ""}`}
            {...register("role")}
          >
            <option value="">Choose Role Type...</option>
            <option value="Seller">Seller</option>
            <option value="Buyer">Buyer</option>
          </select>
          {errors.role ? (
            <label className="text-danger mt-1"> {errors.role.message}</label>
          ) : (
            ""
          )}
        </div>
        <div className="d-grid">
          <input type="submit" value="REGISTER" className="btn theme-btn" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
