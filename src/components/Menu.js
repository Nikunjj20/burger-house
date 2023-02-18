import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/shop.jpg" alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Deal Of The Day</h3>
            <h1>INDIAN THIN PATTIES</h1>
            <p>
            {/* The classic Double Patty burger stacks two 100% pure Aloo patties seasoned with just a pinch of salt and pepper with French Fries */}
            Free Indian Thin Patties Burger on Orders Above Rs 399
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
