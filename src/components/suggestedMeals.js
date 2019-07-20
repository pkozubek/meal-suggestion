import React, { Fragment } from "react";
import SingleMeal from "./singleMeal";

const suggestedMeals = props => {
  return (
    <Fragment>
      {props.meals.map((element, index) => {
        let { ingredients } = element;

        let preparedElement = {
          ...element,
          ingredients: ingredients
            .split(",")
            .map(arrElement => arrElement.trim())
        };

        //console.log(preparedElement);
        return <SingleMeal key={"s" + index} singleMeal={preparedElement} />;
      })}
    </Fragment>
  );
};

export default suggestedMeals;
