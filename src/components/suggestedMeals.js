import React, { Fragment } from "react";
import SingleMeal from "./singleMeal";

const suggestedMeals = props => {
  return (
    <Fragment>
      {props.meals.map(element => {
        return <SingleMeal singleMeal={element} />;
      })}
    </Fragment>
  );
};

export default suggestedMeals;
