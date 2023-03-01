import { useParams } from "react-router-dom";

import { ImageUrl } from "./config";

import Shimmer from "./Shimmer";
import useRestaurant from "./utils/hooks/useRestaurant";
const RestaurantDetail = () => {
  const params = useParams();
  const { id } = params;

  const urlData = useRestaurant(id);

  const name = urlData?.data?.name;
  const cloudinaryImageId = urlData?.data?.cloudinaryImageId;
  const allItems = urlData?.data?.menu?.items;

  return !urlData ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <img src={ImageUrl + cloudinaryImageId} />
        <h1>
          {name}
          {cloudinaryImageId}
        </h1>

        {Object.values(allItems).map((props) => (
          <li key={props?.id}>{props?.name}</li>
        ))}
      </div>
    </>
  );
};

export default RestaurantDetail;
