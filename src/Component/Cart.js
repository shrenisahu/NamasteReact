import React from "react";
import { useSelector } from "react-redux";
import cartSlice from "./utils/cartSlice";
import { useDispatch } from "react-redux";
import { clearCart } from "./utils/cartSlice";
import FoodCard from "../../FoodCart";
const Cart = () => {
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
  }
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div>
      <h1> Cart -{cartItems.length}</h1>
      <button className="bg-red-50" onClick={() => handleClearCart()}>
        Clear Cart
      </button>
      {cartItems.map((props) => (
        <FoodCard key={props.id} {...props} />
      ))}
    </div>
  );
};

export default Cart;
