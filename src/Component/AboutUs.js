import React from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Profile from "./Profile";

import ProfileClass from "./Class";
import UserContext from "./utils/UserContext";
// const AboutUs = () => {
//   return (
//     <h1>
//       <h1>Profile Section</h1>
//       <Outlet />
//       <ProfileClass name="Shree" />
//     </h1>
//   );
// };

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    {
      // console.log("parent constructor");
    }
  }

  componentDidMount() {
    // console.log("parent  componentDidMount");
  }
  componentDidUpdate() {
    // console.log("parent componentDidUpdate");
  }

  render() {
    // console.log("parent render");
    return (
      <h1>
        this is About
        <UserContext.Consumer>
          {(value) => {
            return (
              <h1>
                {value.user.name}-{value.user.email}
              </h1>
            );
          }}
        </UserContext.Consumer>
        <Outlet />
        {/* <ProfileClass name="Shree" /> */}
        {/* <Profile /> */}
      </h1>
    );
  }
}

export default AboutUs;
