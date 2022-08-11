import "./Registration.scss";
import { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <div className="container reg-contain">
      <h2 className="font-w-700 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-2"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input
            className="form-control mt-2"
            type="password"
            name="password"
            autoComplete="off"
            value={inputs.password || ""}
            onChange={handleChange}
          />
        </div>
        <div className="d-grid">
          <input type="submit" value="LOGIN" className="btn theme-btn" />
        </div>
      </form>
    </div>
  );
};

export default Login;
