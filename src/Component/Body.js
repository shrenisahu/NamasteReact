import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestraurantCard";
import useGetBodyRestaurant from "./utils/hooks/useGetBodyRestaurant";
import Shimmer from "./Shimmer";
import useOnline from "./utils/hooks/useOnline";

const Body = () => {
  const allRestaurant = useGetBodyRestaurant();
  const [filteredRestaurant, setFilterRestaurant] = useState(allRestaurant);
  const [isFilterDone, setfilterDone] = useState(false);
  const [searchText, setSearchInput] = useState();

  useEffect(() => {
    setFilterRestaurant(allRestaurant);
  }, [allRestaurant]);

  const filterData = (searchText, allRestaurant) => {
    const ans = allRestaurant?.filter((props) =>
      props?.data?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    setFilterRestaurant(ans);
    setfilterDone(true);
  };

  const online = useOnline();
  if (!online) return <h1>you are offlineb pls check inyternet connection</h1>;

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
          {isFilterDone && filteredRestaurant.length == 0 ? (
            <h1>notMatch</h1>
          ) : (
            filteredRestaurant?.map((p) => {
              return (
                <>
                  <RestaurantCard {...p?.data?.data} />
                </>
              );
            })
          )}
        </div>
      )}
    </>
  );
};

export default Body;
