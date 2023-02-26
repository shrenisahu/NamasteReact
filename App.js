import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Component/Header";
import Body from "./src/Component/Body";
import Footer from "./src/Component/Footer";
import "./index.css";
const App = () => {
  const a = "The Prime Time";
  const b = "Prime";
  const ans = a.includes(b);
  console.log(ans);

  return (
    <div>
      <h1>here</h1>
      <Header />

      <Body />
      <Footer />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
