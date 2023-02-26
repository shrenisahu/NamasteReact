import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart Us</li>

          {isLoggedIn ? (
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
