import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timeout); // Clean up timeout on component unmount
  }, []);

  const handleError = (error) => {
    setError(error);
    setLoading(false);
  };

  const EmptyCart = () => (
    <div className="container py-5 text-center">
      <div className="row">
        <div className="col-12">
          <h4 className="display-5">Your Cart is Empty</h4>
          <Link to="/" className="btn btn-outline-dark mt-3">
            <i className="fa fa-arrow-left"></i> Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );

  const addItem = (product) => {
    try {
      dispatch(addCart(product));
    } catch (error) {
      handleError("Failed to add item to cart.");
    }
  };

  const removeItem = (product) => {
    try {
      dispatch(delCart(product));
    } catch (error) {
      handleError("Failed to remove item from cart.");
    }
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;

    // Correct the calculation of subtotal and totalItems
    state.forEach((item) => {
      const itemPrice = item?.price || 0;
      const itemQty = item?.qty || 0;
      subtotal += itemPrice * itemQty;
      totalItems += itemQty;
    });

    return (
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-6">
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Your Cart</h5>
                </div>
                <div className="card-body">
                  <div className="card-title font-bold text-center justify-content-center text-lg">
                    <h2 className="font-bold">
                      My Cart
                      <FaCartShopping size={24} />
                    </h2>
                  </div>
                  {state?.map((item) => {
                    const itemOutOfStock = !item?.price || !item?.image;

                    return (
                      <div
                        key={item?.id}
                        className="row mb-3 align-items-center"
                      >
                        <div className="col-md-3">
                          {totalItems == 0 ? (
                            <div className="text-center">
                              <i>Your cart is empty</i>
                            </div>
                          ) : (
                            <>
                              {loading ? (
                                <>
                                  <div className="d-flex justify-content-center">
                                    <div
                                      className="spinner-border"
                                      role="status"
                                    >
                                      <span className="sr-only">
                                        Loading...
                                      </span>
                                    </div>
                                  </div>

                                  <p>Please Wait..</p>
                                  <div className="flex-direction:column justify-content-center">
                                    <div
                                      className="spinner-border"
                                      role="status"
                                    >
                                      <span className="sr-only">
                                        Loading...
                                      </span>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {item?.image && (
                                    <img
                                      src={item?.image || ""}
                                      alt={item?.title || "Img not found"}
                                      className="img-fluid rounded text-nowrap"
                                      style={{ maxWidth: "120px" }}
                                    />
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </div>

                        <div className="col-md-5">
                          {itemOutOfStock ? (
                            <></>
                          ) : (
                            <>
                              <strong>{item?.title || "Untitled Item"}</strong>
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-outline-dark"
                                  onClick={() => removeItem(item)}
                                  aria-label={`Remove ${item?.title}`}
                                >
                                  <FaMinus />
                                </button>
                                <span className="mx-3">{item?.qty}</span>
                                <button
                                  className="btn btn-outline-dark"
                                  onClick={() => addItem(item)}
                                  aria-label={`Add ${item?.title}`}
                                >
                                  <FaPlus />
                                </button>
                              </div>
                              <p className="mt-2">
                                <strong>
                                  ${item?.price} x {item?.qty} = $$
                                  {Math.round(item?.price * item?.qty)}
                                </strong>
                              </p>
                              <hr className="mt-2" />
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}
                  <button
                    className="btn text-italic font-bold px-4 rounded-lg btn-primary text-lg"
                    onClick={() => navigate("/")}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Products ({totalItems})
                      <span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Shipping
                      <span>
                        {totalItems == 0 ? <>$0</> : <>${shipping}</>}
                      </span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      <strong>Total</strong>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-lg btn-block mt-3"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  if (loading) {
    return (
      <>
        <div className=" flex-direction:column justify-content-center container py-5 text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
          <div className="text">
            <i>
              <h4>Loading your cart...</h4>
              <p>Please wait while we load your cart items.</p>
            </i>
          </div>
        </div>

        {/* <div className="container py-5 text-center"></div> */}
      </>
    );
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <h4>Something went wrong</h4>
        <p>{error}</p>
        <Link to="/" className="btn btn-outline-dark">
          <i className="fa fa-arrow-left"></i> Go back to Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 cart">
      <h1 className="text-center">Cart</h1>
      <hr />
      {state.length > 0 ? <ShowCart /> : <EmptyCart />}
    </div>
  );
};

export default Cart;
