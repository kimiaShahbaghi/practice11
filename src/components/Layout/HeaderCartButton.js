import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Carts/CartIcon";

function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}> 3 </span>
    </button>
  );
}

export default HeaderCartButton;
