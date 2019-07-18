import React from "react";
import SingleIngredient from "./singleIngredient";
import styled from "styled-components";

const IngredientsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  margin: 0 auto;
  justify-content: center;
`;

const ingredients = props => {
  const { deleteIngredient } = props;

  return (
    <IngredientsContainer>
      {props.ingredients.map((singleIngr, index) => {
        return (
          <SingleIngredient
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
