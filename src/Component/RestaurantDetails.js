import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ImageUrl } from "./config";
import { Url1 } from "./config";
import Shimmer from "./Shimmer";
const RestaurantDetail = () => {
  const [urlData, setUrlData] = useState(null);
  const params = useParams();
  const { id } = params;
  console.log(params);
  const Url = Url1 + id;

  async function fetchdata() {
    const data = await fetch(Url);
    const json = await data.json();
    // console.log(json?.data?.menu?.items);
    setUrlData(json);
  }
  const name = urlData?.data?.name;
  const cloudinaryImageId = urlData?.data?.cloudinaryImageId;
  const allItems = urlData?.data?.menu?.items;

  useEffect(() => {
    fetchdata();
  }, []);

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
