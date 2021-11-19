import React from "react";
import CartContext from "./cart-context";

const defaultcartitems = {
  items: [],
  totalamount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.value);
    const updatedTotalamount =
      state.totalamount + action.value.price * action.value.amount;
    return {
      items: updatedItems,
      totalamount: updatedTotalamount,
    };
  }
  return defaultcartitems;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = React.useReducer(
    cartReducer,
    defaultcartitems
  );
  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", value: item });
  }; //adding items into cart
  const removeItemHandler = (id) => {}; //removing items into cart
  const cartcontext = {
    items: cartState.items,
    totalamount: cartState.totalamount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }; //default value for cartcontext
  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
