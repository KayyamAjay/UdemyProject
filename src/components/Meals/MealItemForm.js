import classes from "./MealItemForm.module.css";
import { useRef, useState } from "react";
import Input from "../UI/Input";
const MealItemForm = (props) => {
  const [amountisValid, setamountisValid] = useState(true); //for error state
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value; //entered amount from form
    const enteredAmountNumber = +enteredAmount; //to change it to Number
    if (
      enteredAmount.trim().length === 0 || //checking for valid amount
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setamountisValid(false);
      return;
    }
    props.onAddtoCart(enteredAmountNumber); //passing amount to Mealitem
  };
  return (
    <form onClick={submitHandler} className={classes.form}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "Amount-" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountisValid && <p>Please Enter a Valid Amount 1-5</p>}
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
