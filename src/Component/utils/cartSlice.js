import { createSlice } from "@reduxjs/toolkit";

function filterCart(itemId, allItems) {
  const ans = allItems?.filter((props) => props.id != itemId);
  return ans;
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // action anme:function that action performs
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log("action", action, state.items);
      state.items = filterCart(action.payload, state.items);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});
// BTS
// cartSlice: {
//     reducer: { },
//     actions: {
//         addItem:
//         removeItem:
//         clearCart:
//     }
// }
// localStorage;
export const { addItem, clearCart, removeItem } = cartSlice.actions; // export actions

export default cartSlice.reducer;
