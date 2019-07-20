import React from "react";
import SingleIngredient from "./singleIngredient";
import styled from "styled-components";

const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${props => (props.source === "recipe" ? "80%" : "60%")};
  margin: 0 auto;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

const ingredients = props => {
  const { source, deleteIngredient } = props;

  return (
    <IngredientsContainer source={source}>
      {source === "recipe" ? (
        <b style={{ color: "gray" }}>Ingredients needed: </b>
      ) : null}
      {props.ingredients.map((singleIngr, index) => {
        return (
          <SingleIngredient
            source={source}
            click={deleteIngredient}
            key={index}
            name={singleIngr}
          />
        );
      })}
    </IngredientsContainer>
  );
};

export default ingredients;
