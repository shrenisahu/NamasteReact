import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
    <>
      <div className="shimmer-box">
        {Array(20)
          .fill("he")
          .map((props) => (
            <div className="shimmer-cards"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
