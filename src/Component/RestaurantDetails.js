import { useParams } from "react-router-dom";

import { ImageUrl } from "./config";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

import Shimmer from "./Shimmer";
import useRestaurant from "./utils/hooks/useRestaurant";
const RestaurantDetail = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const urlData = useRestaurant(id);

  const name = urlData?.data?.name;
  const cloudinaryImageId = urlData?.data?.cloudinaryImageId;
  const allItems = urlData?.data?.menu?.items;
  function handleAddItem() {
    console.log("click");
    dispatch(addItem("C"));
  }

  function AddItemCart(item) {
    dispatch(addItem(item));
  }
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
        {/* <button className="bg-green" onClick={() => handleAddItem()}> */}
        {/* ADD ITEM
        </button> */}
        {Object.values(allItems).map((props) => (
          <li key={props?.id}>
            {props?.name}
            <button className="bg-amber-300" onClick={() => AddItemCart(props)}>
              ADD Item
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default RestaurantDetail;
