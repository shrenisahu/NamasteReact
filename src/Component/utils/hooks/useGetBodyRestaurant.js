import { Swiggy_Url } from "../../config";
import { useState, useEffect } from "react";
const useGetBodyRestaurant = () => {
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [tempData, setTempData] = useState([]);
  async function fetchData() {
    const temp = await fetch(Swiggy_Url);
    const json = await temp.json();
    const data1 = json.data.cards;
    setAllRestaurant(data1);
    setFilterRestaurant(data1);
    setTempData(data1);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return tempData;
};

export default useGetBodyRestaurant;
