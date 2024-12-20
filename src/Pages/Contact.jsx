import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  return (
    <>
      <GoArrowLeft
        size={34}
        className="m-4 px-8 border-radius:50% hover:bg-dark"
        onClick={() => {
          navigate("/about/");
        }}
      />
      <div className="container rounded-lg bg-white col-lg-4 border border-primary border-width-2px col-md-4 col-sm-8 align-items-center mx-auto">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-8 col-sm-8 mx-auto">
            <form className="">
              <div class="form my-3 ">
                <label for="Name">Name</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Message</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="text-center">
                <button
                  class="text-italic font-bold text-xl my-3 px-4 mx-auto btn btn-primary"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
