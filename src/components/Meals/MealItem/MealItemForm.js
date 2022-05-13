import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../Ul/Input";
function MealItemForm() {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaulyValue: "1",
        }}
      />
      <button> + Add</button>
    </form>
  );
}

export default MealItemForm;
