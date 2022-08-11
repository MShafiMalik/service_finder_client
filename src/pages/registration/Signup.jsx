import "./Registration.scss";
import { useState } from "react";

const Signup = () => {
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
      <h2 className="font-w-700 text-center">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label>First Name</label>
          <input
            type="text"
            className="form-control mt-2"
            name="firstname"
            value={inputs.firstname || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control mt-2"
            name="lastname"
            value={inputs.lastname || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label>Email</label>
          <input
            type="email"
            className="form-control mt-2"
            name="email"
            value={inputs.email || ""}
            onChange={handleChange}
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
        <div className="form-group mb-4">
          <label>Confirm Password</label>
          <input
            className="form-control mt-2"
            type="password"
            name="password_confirmation"
            autoComplete="off"
            value={inputs.password_confirmation || ""}
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-4">
          <label>Role Type</label>
          <select
            className="form-control mt-2"
            name="role_type"
            onChange={handleChange}
            value={inputs.role_type || ""}
          >
            <option value="">Choose Role Type...</option>
            <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
          </select>
        </div>
        <div className="d-grid">
          <input type="submit" value="REGISTER" className="btn theme-btn" />
        </div>
      </form>
    </div>
  );
};

export default Signup;
