import Logo from "./Logo";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="header">
      <Logo />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
