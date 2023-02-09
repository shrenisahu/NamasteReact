import React, { useState } from "react";
import RestaurantCard from "./RestraurantCard";
import { data } from "./data";
const Body = () => {
  const [searchText, setSearchInput] = useState();
  const [restaurant, setRestaurant] = useState(data);
  const filterData = (searchText, restaurant) => {
    const ans = data.filter((props) => props.data.name.includes(searchText));
    setRestaurant(ans);
  };

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
          onClick={() => filterData(searchText, restaurant)}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurant.map((p) => {
          return (
            <>
              <RestaurantCard {...p.data} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Body;
