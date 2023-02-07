import RestaurantCard from "./RestraurantCard";
import { data } from "./data";
const Body = () => {
  return (
    <div className="restaurant-list">
      {data.map((p) => {
        return (
          <>
            <RestaurantCard {...p.data} />
          </>
        );
      })}
    </div>
  );
};

export default Body;
