import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/burgerlogoo.jpg" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link to="/" className="link">Home</Link>
          </li>
          <li>
            <Link to="/menu" className="link">Menu</Link>
          </li>
          <li>
            <Link to="/shop" className="link">Shop</Link>
          </li>
          <li>
            <Link to="/deals" className="link">Deals</Link>
          </li>
          <li>
            <Link to="/contacts" className="link">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
