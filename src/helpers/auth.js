import axios from "axios";
import { SERVER_BASE_URL } from "../common/constants";

const login = async (body) => {
  return axios
    .post(`${SERVER_BASE_URL}api/auth/login`, body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

const signup = async (body) => {
  return axios
    .post(`${SERVER_BASE_URL}api/auth/signup`, body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

const authenticate = (data, next) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("access_token", data?.token);
    next();
  }
};

const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("access_token")) {
    return JSON.parse(localStorage.getItem("access_token"));
  } else {
    return false;
  }
};

const me = async () => {
  return axios
    .get(`${SERVER_BASE_URL}api/auth/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};

export { login, signup, authenticate, isAuthenticated, me };
