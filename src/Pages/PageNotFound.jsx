import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10 justify-content-center item-center py-5 bg-light text-center">
            <img
              src="https://thumbs.dreamstime.com/b/concept-error-man-standing-near-laptop-warning-sign-code-wrong-address-link-page-not-found-oops-mistake-something-272604208.jpg"
              alt=""
              className="img-found bg-slate-700 border-2px solid"
            />
            <h4 className="p-3 display-5">
              <i>404:Page Not found</i>
            </h4>
            <Link
              to="/"
              className="px-6 btn btn-info py-2 font-bold text-italic mx-4"
            >
              <i className="fa fa-arrow-left"></i>Go Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
