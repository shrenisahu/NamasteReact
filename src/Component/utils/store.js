import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice, // name of slice:slice
  },
}); // creating a store.now we need to provide this store to the main root or any selective component
export default store;
