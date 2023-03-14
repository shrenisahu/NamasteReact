import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import Logo from "./Logo";
import useLoggedIn from "./utils/hooks/useLoggedIn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cartSlice from "./utils/cartSlice";
// import store from "./utils/store";
const Header = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // const logIn = useLoggedIn();
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>

          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li>Cart-{cartItems.length}</li>
          </Link>

          <h1>{user.name}</h1>
        </ul>
      </div>
    </div>
  );
};

export default Header;
