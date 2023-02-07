const RestaurantCard = ({ name, cloudinaryImageId, avgRating }) => {
  // console.log(id);

  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name} </h2>

      <h2>Dish</h2>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
