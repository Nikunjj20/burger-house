import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Burger Delivery</h3>
            <h1>Burger House</h1>
            <p>
              Flat 50% OFF on your Favourite Burgers
              Go grab Now
            </p>
            <div className="banner__btn">
              <a href="#" className="btn btn-smart">
                ORDER NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
