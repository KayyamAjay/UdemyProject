import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
const MealItem = (props) => {
  const cartctx = useContext(CartContext); //using context
  const addtoCartHandler = (amount) => {
    cartctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    }); //using context additem method which needs item so passing a object
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <MealItemForm onAddtoCart={addtoCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
