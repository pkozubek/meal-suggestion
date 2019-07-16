import React from "react";

const ingredients = props => {
  return (
    <div>
      {props.ingredients.map((singleIngr, index) => {
        return <p key={index}>{singleIngr}</p>;
      })}
    </div>
  );
};

export default ingredients;
