import "./Registration.scss";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  loginFail,
  loginPending,
  loginSuccess,
} from "../../reducers/authSlice";
import { authenticate, login } from "../../helpers/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ROUTE_NAMES } from "../../common/constants";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const yupValidation = Yup.object().shape({
    email: Yup.string().required("Email is mendatory").email(),
    password: Yup.string()
      .required("Password is mendatory")
      .min(8, "Enter minimum 8 characters")
      .max(15, "Enter maximum 15 characters"),
  });

  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(body) {
    setLoading(true);
    dispatch(loginPending());

    try {
      login(body).then((response) => {
        if (response?.statusText === "OK") {
          const data = response.data.data;
          authenticate(data, () => {
            dispatch(loginSuccess({ data }));
            setLoading(false);
            toast.success("Login Successfull!", {
              autoClose: 2000,
            });
            navigate(ROUTE_NAMES.HOME);
          });
        } else {
          const error = response?.response.statusText;
          dispatch(loginFail({ error }));
          setLoading(false);
          toast.error(response.response.data.message, {
            autoClose: 2000,
          });
        }
      });
    } catch (error) {
      console.log("login page catch error", error);
      setLoading(false);
      toast.error("Login Not Successfull!", {
        autoClose: 2000,
      });
    }
  }

  return (
    <div className="container reg-contain">
      <h2 className="font-w-700 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <div className="d-grid">
          {loading === true ? (
            <button type="submit" className="btn theme-btn" disabled="disabled">
              Loading...
            </button>
          ) : (
            <button type="submit" className="btn theme-btn">
              LOGIN
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
