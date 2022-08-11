import React, { useState } from "react";
import "./ContactUs.scss";
const ContactUs = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <div className="container py-4" style={{ maxWidth: "600px" }}>
        <div className="text-center">
          <h2 className="font-w-700 mt-3">Contact Us</h2>
          <p>Leave us a message:</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your name.."
              value={inputs.name || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Your email.."
              value={inputs.email || ""}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="subject">Subject</label>

            <textarea
              rows="4"
              className="form-control mt-2"
              name="subject"
              placeholder="Write something.."
              value={inputs.subject || ""}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 d-grid">
            <button className="btn theme-btn">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
