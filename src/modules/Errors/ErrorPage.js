import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container  text-dark my-5">
      <h1 className="display-1 text-center">404</h1>
      <h2 className="text-center">SORRY!</h2>
      <h3 className="font-weight-light text-center">Page Not Found.</h3>
      <div className="text-center mt-4">
        <Link className="font-weight-medium" to="/">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
