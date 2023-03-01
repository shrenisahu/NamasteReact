import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestraurantCard";
import { Swiggy_Url } from "./config";
// import Loader from "./Loader";
import Shimmer from "./Shimmer";

const Body = () => {
  const [isFilterDone, setfilterDone] = useState(false);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchInput] = useState();
  const [filteredRestaurant, setFilterRestaurant] = useState([]);

  const filterData = (searchText, allRestaurant) => {
    const ans = allRestaurant?.filter((props) =>
      props?.data?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );

    setFilterRestaurant(ans);
    setfilterDone(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const tempdata = await fetch(Swiggy_Url);

    const json = await tempdata.json();
    const data1 = json.data.cards;
    setAllRestaurant(data1);
    setFilterRestaurant(data1);
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="seach-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => filterData(searchText, allRestaurant)}
        >
          Search
        </button>
      </div>

      {allRestaurant?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurant.map((p) => {
            return (
              <>
                <RestaurantCard {...p?.data?.data} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
