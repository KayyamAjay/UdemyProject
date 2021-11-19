import React from "react";
import CartContext from "./cart-context";

const defaultcartitems = {
  items: [],
  totalamount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalamount =
      state.totalamount + action.value.price * action.value.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    ); //finding the index of existing item

    const existingItem = state.items[existingItemIndex]; //if index is found this statement gets executed

    let updatedItem;
    let updatedItems;
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.value.amount,
      }; //updating amount of existing item

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.value };
      updatedItems = state.items.concat(updatedItem);
    }

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
