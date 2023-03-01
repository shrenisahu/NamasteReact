export const filterData = (searchText, allRestaurant) => {
  const ans = allRestaurant?.filter((props) =>
    props?.data?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
  );

  setFilterRestaurant(ans);
  setfilterDone(true);
};
