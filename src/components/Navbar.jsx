import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux"; // Uncomment if using Redux for cart
import { TiShoppingCart } from "react-icons/ti";
import { IoIosLogIn } from "react-icons/io";
import { FaFileContract, FaHome, FaUserPlus } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHandsBound, FaProductHunt } from "react-icons/fa6";
import { FcAbout } from "react-icons/fc";
import { SiPicartodottv } from "react-icons/si";

const Navbar = () => {
  // const state = useSelector((state) => state.handleCart);
  const cartItems = 0; // Replace this with actual cart length from Redux or context
  const state = useSelector((state) => state.handleCart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let subtotal = 0;
  let shipping = 30.0;
  let totalItems = 0;

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  // Correct the calculation of subtotal and totalItems
  state.forEach((item) => {
    const itemPrice = item?.price || 0;
    const itemQty = item?.qty || 0;
    subtotal += itemPrice * itemQty;
    totalItems += itemQty;
  });

  return (
    <>
      <style>
        {`
          /* Navbar Styling */
          .navbar {
            background-color: #f8f9fa; /* Light background color */
            box-shadow: 0 4px 6px rgba(15, 14, 14, 0.6); /* Subtle shadow for the navbar */
          }

          .navbar-brand {
            font-family: 'Poppins', sans-serif;
            color: #343a40;
            font-weight: bold;
            font-size: 1.5rem;
          }

          .navbar-brand:hover {
            color: #007bff; /* Change color on hover */
          }

          .navbar-nav .nav-link {
            color: #343a40;
            padding: 10px 5px;
            font-size: 1.1rem;
            text-transform: uppercase;
            font-weight: 600;
            transition: color 0.5s ease;
          }

          .navbar-nav .nav-link:hover {
            color: #007bff; /* Change color on hover */
          }

          .navbar-nav .nav-item.active .nav-link {
            color: #007bff; /* Highlight active link */
            font-weight: bold;
          }

          .navbar-toggler {
            border-color: #007bff; /* Blue color for toggler */
          }

          .navbar-toggler-icon {
            background-color: #007bff; /* Icon color */
          }

          /* Buttons */
          .buttons .btn {
            font-size: 1rem;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 25px;
          }

          .buttons .btn:hover {
            background-color: #007bff;
            color: white;
            border-color: #007bff;
          }

          /* Cart Badge */
          .cart-count {
            font-size: 0.85rem;
            padding: 0.4rem 0.6rem;
            background-color: #dc3545;
            color: white;
            font-weight: bold;
            position: absolute;
            top: -12px;
            right: -13px;
            transform: translate(50%, -50%);
          }

          /* Media Queries for responsiveness */
          @media (max-width: 768px) {
            .navbar-nav {
              text-align: center;
            }

            .buttons {
              margin-top: 10px;
            
            }

            .navbar-toggler-icon {
              // background-color: #007bff;
            }
              
          }
            /* Assuming your logo is inside an element with class 'logo' */
            /* Logo with animated gradient */
.logo {
  display: inline-block;
  background: linear-gradient(90deg, #D32F2F, #1976D2, #388E3C); /* Darker & bright colors */
  background-size: 400% 400%; /* Ensures smooth gradient animation */
  -webkit-background-clip: text; /* For Safari */
  background-clip: text;
  color: transparent;
  font-size: 42px; /* Adjust according to your logo size */
  font-weight: bold;
  text-transform: uppercase; /* Optional: Adds an uppercase effect */
  animation: gradientAnimation 4s ease infinite; /* Adds animation */
  letter-spacing: 0.5px; /* Optional: Increases spacing between letters for better readability */
}

/* Gradient animation to make the logo color shift */
@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Optional: For better handling of background size and position in case you use an image */
.logo img {
  display: block;
  width: 100%; /* Make the logo fit the container */
  height: auto;
}


        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-light bg-gray-500  sticky-top shadow-md">
        <div className="container bg-gray-500">
          <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
            <b>
              <div className="flex  gap-2">
                <span className="mr-2">
                  <SiPicartodottv size={54} className="mr-4" />
                </span>
                <i className="logo">ShopEasy</i>
              </div>
            </b>
          </NavLink>
          <button
            className="navbar-toggler mx-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="text-md font-bold bg-light outline-none">
              <RxHamburgerMenu />
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto my-2 text-center">
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center justify-content-center"
                  to="/"
                  onClick={handleMenuClick}
                >
                  <FaHome size={24} className="mr-2" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center justify-content-center"
                  to="/product"
                  onClick={handleMenuClick}
                >
                  <FaProductHunt size={24} className="mr-2" />
                  <span>Products</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center justify-content-center"
                  to="/about"
                  onClick={handleMenuClick}
                >
                  <FcAbout size={24} className="mr-2" />
                  <span>About</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link d-flex align-items-center justify-content-center"
                  to="/contact"
                  onClick={handleMenuClick}
                >
                  <FaFileContract size={24} className="mr-2" />
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>

            <div className="buttons text-center">
              <NavLink
                to="/login"
                onClick={handleMenuClick}
                className="btn btn-outline-dark m-2"
              >
                <IoIosLogIn className="mr-1" /> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark m-2">
                <FaUserPlus className="mr-1" /> Register
              </NavLink>
              <NavLink
                to="/cart"
                onClick={handleMenuClick}
                className="btn btn-outline-dark m-2 position-relative"
              >
                <TiShoppingCart className="mr-0" /> Cart{" "}
                {totalItems != 0 && (
                  <span className="cart-count position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger px-2 py-2 text-md font-bold">
                    {totalItems}
                  </span>
                )}
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
