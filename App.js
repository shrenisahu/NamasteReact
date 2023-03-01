import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./src/Component/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/Footer";
import RestaurantDetail from "./src/Component/RestaurantDetails";
import Error from "./src/Component/Error";
import "./index.css";
import AboutUs from "./src/Component/AboutUs";
import { useState } from "react";
import Profile from "./src/Component/Profile";
const App = () => {
  const [islogIn, setIsLoggedIn] = useState(true);
  return islogIn ? (
    <button onClick={() => setIsLoggedIn(false)}>Login</button>
  ) : (
    <div>
      <button onClick={() => setIsLoggedIn(true)}>Logout</button>
      <Header />
      <Outlet></Outlet>

      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "about",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
  {
    path: "about",
    element: <AboutUs />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
