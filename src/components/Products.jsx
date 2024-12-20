import React, { useEffect, useState } from "react";
import "./Products.css"; // Import custom CSS for styling
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success(`${product.title} added to cart!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://fakestoreapi.com/products/");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const products = await response.json();
        setData(products);
        setFilter(products);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const filterProduct = (category) => {
    const filteredProducts = data.filter((item) => item.category === category);
    setFilter(filteredProducts);
  };

  const Loading = () => {
    return (
      <div className="loading-container">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="text">
          <i>
            <h4>Please Wait, Loading Items...</h4>
          </i>
        </div>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-3 text-white bg-gray-600 font-bold d-none d-md-block">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All Products
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        <div className="product-list">
          <div className="d-flex flex-wrap justify-content-center">
            {filter.map((product) => (
              <div
                key={product.id}
                className="col-md-4 col-sm-6 col-xs-8  mb-4 gap-2 col-lg-3"
              >
                <div className="card text-center h-100 product-card shadow-lg bg-slate-700 gap-3">
                  {loading ? (
                    <div className="flex-direction:column justify-content-center text-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                      </div>
                    </div>
                  ) : (
                    <img
                      className="card-img-top p-3"
                      src={product.image}
                      alt={product.title}
                      height={300}
                      onClick={() => {
                        navigate(`/product/${product.id}/`);
                      }}
                    />
                  )}
                  <div className="card-body gap-2">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}...
                    </h5>
                    <p className="card-text">
                      {product.description.substring(0, 90)}...
                    </p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">$ {product.price}</li>
                  </ul>
                  <div className="card-body">
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-dark m-1"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-dark m-1"
                      onClick={() => {
                        addProduct(product);
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container my-5 py-2">
      <div className="row">
        <div className="col-12">
          <h2 className="display-5 text-center">Latest Products</h2>
          <hr />
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="alert alert-danger text-center" role="alert">
          <strong>Oops! Something went wrong.</strong> Please check your
          internet connection and try again later!
        </div>
      ) : (
        <ShowProducts />
      )}
    </div>
  );
};

export default Products;
