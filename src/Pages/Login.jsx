import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
      toast.error("Both the fields are required");
    } else {
      toast.success(`Welcome Back ${email}`);
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };
  return (
    <>
      {/* <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  class="my-2 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <div className="wrapper">
        <div className="form-wrapper">
          <h2 className="title">Login to Your Account</h2>
          <form id="form" className="form">
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <input
                id="email"
                type="email"
                placeholder="someone@gmail.com"
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
              defaultValue="Login"
              onClick={(e) => handleSubmit(e)}
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
      {console.log(email, password)}
    </>
  );
};

export default Login;

// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const form = document.getElementById("form");
// const msg = document.getElementById("msg");

// // Function to validate the email
// const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// // Function to validate password
// const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// // Function used to display errors
// const generateError = (errorName, errorMsg) =>{
//     const emailError = document.getElementById("emailError");
//     const passwordError = document.getElementById("passwordError");
//     if(errorName == "email"){
//         emailError.innerText = errorMsg;
//     }else if(errorName == "password"){
//         passwordError.innerText = errorMsg;
//     }
// }

// const formValidate = (inputEmail, inputPassword) =>{
//     if(!validateEmail(inputEmail)){
//         emailError = "please enter a valid email address";
//         generateError("email",emailError);
//         return;
//     }
//     if(!validatePassword(inputPassword)){
//         passwordError = "please enter correct password";
//         generateError(generateError("password",passwordError));
//         return;
//     }

// }

// //triggers when user submits the form
// form.addEventListener("submit",(e) => {
//     e.preventDefault();
//     formValidate(email, password);
// });

// // Focusout event listener. Triggers when the user clicks anywhere else besides the input
// email.addEventListener("focusout", (e)=>{
//     if(!validateEmail(email)){
//         email.style.borderColor = "red";
//         generateError("email", "Please enter a valid email");
//         email.parentElement.classList.add("error");
//     }
// });

// // Focusout event listener triggers when the user clicks anywhere else besides the input
// password.addEventListener("focusout", (e)=>{
//     if(!validatePassword(password)){
//         password.style.borderColor = "red";
//         generateError("password", "Please enter a valid password");
//         password.parentElement.classList.add("error");
//     }
// });
