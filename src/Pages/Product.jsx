import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import Marquee from "react-fast-marquee";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { GoArrowLeft } from "react-icons/go";
import ScrollToTop from "../components/ScrollToTop";
import "./product.css";
export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  const delProduct = (product) => {
    dispatch(delCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);

        const response2 = await fetch(
          `https://fakestoreapi.com/products/category/${data.category}`
        );
        const data2 = await response2.json();
        setSimilarProducts(data2);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
        setLoading2(false);
      }
    };
    getProduct();
  }, [id]);

  const Loading = () => (
    <div className="container py-5 text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      <h4 className="font-bold text-italic">Please wait, loading items...</h4>
    </div>
  );

  const ShowProduct = () => (
    <div className="container py-3 mx-auto my-4">
      <GoArrowLeft
        size={34}
        className="px-8 mb-0 py-6 pointer hover:bg-dark rounded-circle"
        onClick={() => navigate("/product/")}
      />
      <div
        className="row d-flex justify-content-center container bg-white shadow-lg rounded mt-1"
        style={{
          background: "linear-gradient(180deg,#f3f4f6,#)",

          "background-size": "400% 400%",
        }}
      >
        <div className="col-md-8 col-lg-10 justify-content-center py-1">
          {loading ? (
            <Skeleton height={400} width={400} />
          ) : (
            <div className="d-lg-flex px-6 gap-4">
              <div
                className="card py-5 col-lg-8"
                style={{
                  width: "18rem",
                  background: "transparent",
                  objectFit: "cover",
                  border: "none",
                }}
              >
                <img
                  className="card-img-top img-fluid mt-5 mr-4 rounded"
                  src={product.image}
                  alt="Card image cap"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="py-5">
                {loading ? (
                  <>
                    <Skeleton height={30} width={250} />
                    <Skeleton height={90} />
                    <Skeleton height={40} width={70} />
                  </>
                ) : (
                  <>
                    <div className="justify-content-start text-italic">
                      <h4 className="text-muted align-items-start text-white font-bold">
                        {product.category}{" "}
                        <span className="ml-2 ">
                          (
                          <b>
                            <i>Price: ${product.price}</i>
                          </b>
                          )
                        </span>
                      </h4>
                      <h1>{product.title}</h1>
                      <hr className="mt-2" />
                      <p
                        className="lead justify-content-start"
                        style={{
                          fontStyle: "italic",
                          fontFamily: "arial,sans-serif",
                        }}
                      >
                        {product.description}
                      </p>
                    </div>

                    <div className="d-flex justify-content-start text-center font-bold text-italic gap-4">
                      <button
                        className="btn btn-success px-6 py-3 shadow-lg rounded"
                        onClick={() => addProduct(product)}
                      >
                        Add to Cart
                      </button>
                      <button
                        className="btn btn-primary px-6 py-3 shadow-lg rounded"
                        onClick={() => navigate("/cart")}
                      >
                        My Cart
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const Loading2 = () => (
    <div className="container py-5 text-center">
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
      <h4>Please wait...</h4>
    </div>
  );

  const ShowSimilarProduct = () => (
    <div className="py-4 my-4">
      <div className="d-flex justify-content-start overflow-x-auto">
        {similarProducts.map((item) => (
          <div
            className="card mx-3 text-center"
            key={item.id}
            style={{ width: "18rem" }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="card-img-top p-3 rounded"
              height={300}
              width={300}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">
                {item.title.length > 15
                  ? item.title.substring(0, 15) + "..."
                  : item.title}
              </h5>
              <button
                className="btn btn-dark m-1"
                onClick={() => addProduct(item)}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-dark m-1"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
      <div className="row my-4 py-5">
        <h2>You may also like</h2>
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          speed={60}
          className="shadow-lg rounded"
        >
          {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
        </Marquee>
      </div>
    </div>
  );
};
