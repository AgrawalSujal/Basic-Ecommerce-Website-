import React, { useEffect, useState } from "react";
import { BiLeftArrow } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { GoArrowLeft } from "react-icons/go";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom for navigation

const About = () => {
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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
      <div className="row justify-content-center">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
            <div className="card text-center h-100 product-card">
              <Skeleton height={300} />
              <div className="card-body">
                <Skeleton width="80%" />
                <Skeleton width="60%" />
              </div>
              <ul className="list-group list-group-flush">
                <Skeleton width="50%" />
              </ul>
              <div className="card-body">
                <Skeleton width="50%" />
                <Skeleton width="50%" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <GoArrowLeft
        size={34}
        className="m-4 px-8 border-radius:50% hover:bg-dark"
        onClick={() => {
          navigate("/product/");
        }}
      />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to ShopEasy, your one-stop destination for high-quality and
          trendy products. We offer a wide range of fashion, electronics, and
          accessories designed to meet your style and everyday needs. Whether
          you're shopping for the latest tech gadgets, stylish clothing, or
          elegant jewelry, we've got something for everyone. We believe in
          offering top-notch products at affordable prices, delivered with
          exceptional customer service. Browse our categories and start shopping
          today!
        </p>

        <h2 className="text-center py-4">Our Categories</h2>
        <div className="row">
          {/* Men's Clothing Card */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <Link to="/" className="text-decoration-none">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Men's Clothing"
                  onClick={() => filterProduct("men's clothing")}
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Men's Clothing</h5>
                  <p className="text-center">
                    Explore the latest fashion trends for men, including stylish
                    shirts, jeans, jackets, and more!
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Women's Clothing Card */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <Link to="/" className="text-decoration-none">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Women's Clothing"
                  onClick={() => filterProduct("women's clothing")}
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Women's Clothing</h5>
                  <p className="text-center">
                    Discover a wide range of fashionable clothing for women,
                    including dresses, skirts, and blouses!
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Jewelry Card */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <Link to="/" className="text-decoration-none">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Jewelry"
                  onClick={() => filterProduct("jewelery")}
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Jewelry</h5>
                  <p className="text-center">
                    Shop elegant jewelry pieces including necklaces, rings,
                    bracelets, and more!
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Electronics Card */}
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <Link to="/" className="text-decoration-none">
              <div className="card h-100">
                <img
                  className="card-img-top img-fluid"
                  src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Electronics"
                  onClick={() => filterProduct("electronics")}
                  height={160}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">Electronics</h5>
                  <p className="text-center">
                    Find the best electronics including phones, laptops,
                    smartwatches, and accessories!
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
