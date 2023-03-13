import React, { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "shree",
    email: "dummy",
  },
});
UserContext.displayName = "UserContext";
export default UserContext;
