import React from "react";

const DashBoard = () => {
  return (
    <div className="h-40 rounded justify-content-center mx-auto d-none d-md-block">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        autoSlide="true"
      >
        <div className="carousel-inner shadow-lg rounded">
          <div className="carousel-item active max-h-50" data-interval="2000">
            <img
              src="https://images04.nicepage.com/feature/612016/ecommerce-websites.jpg"
              className="d-flex w-100 justify-content-center"
              alt="image not available..."
              style={{
                objectFit: "cover",
                height: "60vh",
              }}
            />
          </div>
          <div className="carousel-item max-h-50" data-interval="2000">
            <img
              src="https://www.digitalsilk.com/wp-content/uploads/2022/09/best-ecommerce-websites-featured-image.jpg"
              className="d-flex w-100"
              alt="image not available..."
              style={{
                objectFit: "cover",
                height: "60vh",
              }}
            />
          </div>
          <div className="carousel-item max-h-50" data-interval="2000">
            <img
              src="https://wallpapercave.com/wp/wp3537548.png"
              className="d-block w-100"
              alt="image not available"
              style={{
                objectFit: "cover",
                height: "60vh",
              }}
            />
          </div>
          <div className="carousel-item max-h-50" data-interval="2000">
            <img
              src="https://kaivalinfotech.com/wp-content/uploads/2024/05/Ecommerce-Website-Design.jpg"
              className="d-block w-100"
              alt="image not available"
              style={{
                objectFit: "cover",
                height: "60vh",
              }}
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DashBoard;
