import React, { useEffect, useState } from "react";
import "./Navbar.scss";
// import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import axios from "axios";
import { SERVER_BASE_URL } from "../../common/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [categories, setCategories] = useState([]);

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
    <nav className="navbar navbar-expand-md navbar-light border-bottom">
      <div className="container-fluid px-5">
        <Link className="navbar-brand font-w-700" to="/">
          Service Finder
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto">
            <div className="dropdown">
              <Link
                to=""
                className="nav-link app-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Categories
                <FontAwesomeIcon icon={faAngleDown} className="my-auto ms-2" />
              </Link>
              <ul
                className="dropdown-menu"
                style={{
                  maxHeight: "350px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                {categories.map((category, i) => {
                  return (
                    <li key={i}>
                      <Link
                        to={`/category/${category._id}`}
                        className="dropdown-item app-link"
                      >
                        {category.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <li className="nav-item">
              <Link className="nav-link app-link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link app-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link app-link" to="/about-us">
                About Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link app-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link app-link" to="/signup">
                Register
              </Link>
            </li>

            {/* <div className="dropdown category-dropndown">
              <Link
                to=""
                className="nav-link app-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <Avatar
                  sx={{ width: 40, height: 40 }}
                  alt="User"
                  src="assets/images/avatar/default.png"
                />
              </Link>
              <ul
                className="dropdown-menu dropdown-menu-end"
                style={{
                  maxHeight: "350px",
                  overflowY: "auto",
                  overflowX: "hidden",
                }}
              >
                <li>
                  <Link to="" className="dropdown-item app-link">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="" className="dropdown-item app-link">
                    Logout
                  </Link>
                </li>
              </ul>
            </div> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
