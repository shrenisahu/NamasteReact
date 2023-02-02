import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    id: "title", // the h1 tag will have id as title
  },
  "namaste parcel"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "javascript"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
