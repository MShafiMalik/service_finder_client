import "./Registration.scss";
import axios from "axios";
import { ROUTE_NAMES, SERVER_BASE_URL } from "../../common/constants";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const VerifyEmail = () => {
  const { email } = useParams();
  let navigate = useNavigate();

  const yupValidation = Yup.object().shape({
    key: Yup.string().required("Verification Code is mendatory"),
  });
  const formOptions = { resolver: yupResolver(yupValidation) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(body) {
    body = { ...body, email: email };
    axios
      .post(`${SERVER_BASE_URL}api/auth/verify-email`, body)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
          navigate(ROUTE_NAMES.LOGIN);
        }
      });
  }

  const resend_code = () => {
    axios
      .post(`${SERVER_BASE_URL}api/auth/resend-activation-key`, {
        email: email,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.data);
        }
      });
  };

  return (
    <div className="container reg-contain">
      <h2 className="font-w-700 text-center">Email Verification</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label>Verification Code</label>
          <input
            type="number"
            name="key"
            className={`form-control mt-2 ${errors.key ? "is-invalid" : ""}`}
            {...register("key")}
          />
          {errors.key ? (
            <label className="text-danger mt-1"> {errors.key.message}</label>
          ) : (
            ""
          )}
        </div>
        <div className="form-group mb-4">
          Did you not receive key
          <button
            type="button"
            className="btn btn-sm btn-primary ms-2"
            onClick={resend_code}
          >
            Resend
          </button>
        </div>
        <div className="d-grid">
          <input type="submit" value="VERIFY" className="btn theme-btn" />
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
