import { useState, useContext } from "react";
import UserContext from "./utils/UserContext";
import Logo from "./Logo";
import useLoggedIn from "./utils/hooks/useLoggedIn";
import { Link } from "react-router-dom";
const Header = () => {
  const { user } = useContext(UserContext);
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
          <li>Cart Us</li>

          <Link to="/instamart">
            <li>Instamart</li>
          </Link>

          <h1>{user.name}</h1>
        </ul>
      </div>
    </div>
  );
};

export default Header;
