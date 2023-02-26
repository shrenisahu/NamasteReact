import { useEffect } from "react";

import { ImageUrl } from "./config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ name, avgRating, cloudinaryImageId, id }) => {
  const URL = "/restaurant/" + id;

  return (
    <Link to={URL}>
      <div className="card">
        <img src={ImageUrl + cloudinaryImageId} />
        <h2>{name} </h2>

        <h2>Dish</h2>
        <h4>{avgRating}</h4>
      </div>
    </Link>
  );
};
// adding
export default RestaurantCard;
