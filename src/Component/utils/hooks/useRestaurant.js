import { useState, useEffect } from "react";
import { Url1 } from "../../config";
const useRestaurant = (resId) => {
  const [urlData, setUrlData] = useState(null);
  const Url = Url1 + resId;
  async function fetchdata() {
    const data = await fetch(Url);
    const json = await data.json();

    setUrlData(json);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return urlData;
};

export default useRestaurant;
