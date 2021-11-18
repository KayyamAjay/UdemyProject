import CartContext from "./cart-context";
const CartProvider = (props) => {
  const addItemHandler = (item) => {}; //adding items into cart
  const removeItemHandler = (id) => {}; //removing items into cart
  const cartcontext = {
    items: [],
    totalamount: 0,
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
