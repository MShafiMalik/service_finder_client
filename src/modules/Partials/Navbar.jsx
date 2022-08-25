import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import { ROUTE_NAMES, SERVER_BASE_URL } from "../../common/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reducers/authSlice";

const Navbar = () => {
  const isAuth = useSelector((state) => state.isAuth);
  const user = useSelector((state) => state.user);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light border-bottom">
      <div className="container-fluid px-5">
        <Link className="navbar-brand font-w-700" to={ROUTE_NAMES.HOME}>
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
                        to={`${ROUTE_NAMES.CATEGORY}/${category._id}`}
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
              <Link className="nav-link app-link" to={ROUTE_NAMES.SERVICES}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link app-link" to={ROUTE_NAMES.CONTACT_US}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link app-link" to={ROUTE_NAMES.ABOUT_US}>
                About Us
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            {isAuth === false ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link app-link" to={ROUTE_NAMES.LOGIN}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link app-link" to={ROUTE_NAMES.SIGNUP}>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <div className="dropdown category-dropndown">
                <Link
                  to=""
                  className="nav-link app-link dropdown-toggle p-0"
                  data-bs-toggle="dropdown"
                >
                  <img
                    width="40"
                    height="40"
                    alt="User"
                    src={user.image}
                    style={{ borderRadius: "50%" }}
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
                    <Link
                      to=""
                      onClick={handleLogout}
                      className="dropdown-item app-link"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
