import React from "react";
import Marquee from "react-fast-marquee";

const Footer = () => {
  return (
    <>
      <div className="mb-0 text-center absolute">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-12">
            <div className="marquee text-lg  overflow">
              <Marquee
                pauseOnHover={false}
                pauseOnClick={false}
                speed={60}
                scrollamount={100}
              >
                <b>
                  <i>Thankyou for visiting our store!!</i>
                </b>
              </Marquee>
            </div>
            <p className="mb-3 mb-md-0 text-italic mt-3 text-muted">
              Developed by SujalAgrawal
              <a
                href="https://github.com/agrawalsujal"
                className="text-decoration-underline text-dark fs-5"
                target="_blank"
                rel="noreferrer"
              >
                <i>
                  <span>
                    <b>Sujal Singal</b>
                  </span>
                </i>
              </a>
            </p>
            <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="text-dark fs-4"
            >
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
