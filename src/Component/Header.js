import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Header = () => {
  const [islogIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(false);
  };
  const logout = () => {
    setIsLoggedIn(true);
  };
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>

          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
          <li>Cart Us</li>

          {islogIn ? (
            <button onClick={() => login()}>Logout</button>
          ) : (
            <button onClick={() => logout()}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
