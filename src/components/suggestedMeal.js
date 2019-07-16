import React from "react";

const suggestedMeal = props => {
  console.log(props);
  return (
    <div>
      {props.meals.map(singleMeal => {
        return (
          <div>
            <h2>{singleMeal.title}</h2>
            <img src={singleMeal.thumbnail} />
            <p>{singleMeal.ingredients}</p>
            <a href={singleMeal.href}>{singleMeal.href}</a>
          </div>
        );
      })}
    </div>
  );
};

export default suggestedMeal;
