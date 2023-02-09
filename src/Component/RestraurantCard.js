import { ImageUrl } from "./config";
const RestaurantCard = ({ name, cloudinaryImageId, avgRating }) => {
  // console.log(id);

  return (
    <div className="card">
      <img src={ImageUrl + cloudinaryImageId} />
      <h2>{name} </h2>

      <h2>Dish</h2>
      <h4>{avgRating}</h4>
    </div>
  );
};
// adding
export default RestaurantCard;
