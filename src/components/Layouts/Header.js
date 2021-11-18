import classes from "./Header.module.css";
import mealsimg from "../meals.jpg";
import React from "react";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Point</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsimg}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
