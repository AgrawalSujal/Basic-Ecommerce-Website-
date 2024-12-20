import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();

    if (email === "" || name === "" || password === "") {
      toast.error("All the fields are required");
    } else {
      toast.success("Registration Successfull");
      toast.info(`Welcome ${name}`);
      navigate("/");
    }
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div>
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 className="title">Create Your Account!!</h2>
          <form id="form" className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                placeholder="Raj Patel"
                required
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <p id="nameError" />
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="email"
                placeholder="rajpatel123@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <p id="emailError" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                placeholder="Enter Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
              <p id="passwordError" />
            </div>
            <input
              type="submit"
              defaultValue="register"
              onClick={(e) => {
                handleRegister(e);
              }}
            />
          </form>
        </div>
        <div className="success-msg-container">
          <h2 id="msg" className="msg">
            You have provided the correct details and your form will be
            processed
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Registration;
