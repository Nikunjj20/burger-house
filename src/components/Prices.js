import React from "react";
// import myImg from "../../public/img/burgerlist1.jpeg"

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burgerlist1.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading">Maharaja Burger</h1>
              <p className="price__text">
              A Double Decker Toasted Maharaja Bun sandwiched with one layer of corn & cheese patty; crunchy iceberg lettuce; shredded onion; and a slice of cheese and salt annd pepper
              </p>
              <p className="price_rs">Rs 199 only</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burgerlist3.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading">Quarter Pounder with Cheese Deluxe</h1>
              <p className="price__text">
              McDonald's Quarter Pounder® with Cheese Deluxe is a fresh take on a Quarter Pounder® classic burger. Crisp shredded lettuce and three Roma tomato slices
              </p>
              <p className="price_rs">Rs 149 only</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burgerlist2.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading">Double Quarter Pounder with Cheese</h1>
              <p className="price__text">
              Double Quarter Pounder with Cheese features two quarter pound* 100% fresh beef burger patties that are hot, deliciously juicy and cooked when you order
              </p>
              <p className="price_rs">Rs 149 only</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/burgerlist4.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading"> Quarter Pounder® with Cheese Bacon</h1>
              <p className="price__text">
              . It's a hot, deliciously juicy bacon cheeseburger, seasoned with just a pinch of salt and pepper and sizzled on our flat iron grill.
              </p>
              <p className="price_rs">Rs 99 only</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/king2.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading">Maharaja Combo Meal</h1>
              <p className="price__text">
              The one and only McDonald’s Big Mac® Combo Meal. Big Mac Ingredients include a classic sesame hamburger bun, Big Mac Sauce, American cheese and sliced pickles. 
              </p>
              <p className="price_rs">Rs 399 only</p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/king.jpeg" alt="pizza" />
              </div>
              <h1 className="price__heading">Double Quarter Cheese Meal</h1>
              <p className="price__text">
              There are 1,260 calories in a Double Quarter Pounder® with Cheese Meal with a Medium Dr Pepper and Medium French Fries from Burger House.
              </p>
              <p className="price_rs">Rs 299 only</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
