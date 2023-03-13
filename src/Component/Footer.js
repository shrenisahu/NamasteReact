import React, { useContext } from "react";
import UserContext from "./utils/UserContext";

const Footer = () => {
  // const { user } = useContext(UserContext);
  const { user } = useContext(UserContext);
  return (
    <div>
      Footer{user.name} ans {user.email}
    </div>
  );
};

export default Footer;
