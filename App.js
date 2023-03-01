import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Contact from "./src/Component/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/Footer";
import RestaurantDetail from "./src/Component/RestaurantDetails";
import Error from "./src/Component/Error";
import "./index.css";
import { useState } from "react";
import Profile from "./src/Component/Profile";
import ProfileClass from "./src/Component/Class";
import Shimmer from "./src/Component/Shimmer";
// import InstaMart from "./src/Component/InstaMart";

const InstaMart = lazy(() => import("./src/Component/InstaMart")); // this is login bundling,code splitting,chunking,lazy loading,onDemand loading

const AboutUs = lazy(() => import("./src/Component/AboutUs"));
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
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "class",
            element: <ProfileClass />,
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            {/* if we do not use this .we will get error component loaded */}
            <InstaMart />
          </Suspense>
        ),
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
