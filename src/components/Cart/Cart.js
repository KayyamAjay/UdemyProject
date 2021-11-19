import classes from "./Cart.module.css";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const totalamount = cartctx.totalamount.toFixed(2);
  const hasitems = cartctx.items.length > 0;
  const cartItemAddHandler = (item) => {};
  const cartItemRemoveHandler = (id) => {};

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onHide={props.onHide}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onHide} className={classes["button-alt"]}>
          Close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
