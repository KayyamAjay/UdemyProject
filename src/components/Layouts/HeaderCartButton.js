import React from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  const [btnHigh, setbtnHigh] = React.useState(false);
  const ctx = React.useContext(CartContext);
  const numberofcartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  const btnclasses = `${classes.button} ${btnHigh && classes.bump}`;

  React.useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setbtnHigh(true);
    const timer = setTimeout(() => {
      setbtnHigh(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  return (
    <button className={btnclasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofcartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
