import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "./src/Component/utils/cartSlice";

const TEMP =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
const FoodCard = ({ name, avgRating, cloudinaryImageId, id }) => {
  const dispatch = useDispatch();
  function handleRemoveItem(id) {
    dispatch(removeItem(id));
  }

  return (
    <div className="card">
      <img src={TEMP + cloudinaryImageId} />
      <h2>{name} </h2>

      <h2>Dish</h2>
      <h4>{avgRating}</h4>
      <button className="bg-red-600" onClick={() => handleRemoveItem(id)}>
        Remove Item
      </button>
    </div>
  );
};
// adding
export default FoodCard;
