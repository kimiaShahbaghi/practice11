import React from "react";
import MealsImg from "../../assest/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1> ReactMelas</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealsImg} alt="table of food" />
      </div>
    </>
  );
}

export default Header;
