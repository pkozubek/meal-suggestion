import React from "react";
import styled from "styled-components";
import Ingredients from "./ingredients";

const MealContainer = styled.div`
  border: 1px solid blue;
`;

const Title = styled.h2`
  font-size: 0.9em;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const singleMeal = props => {
  const { title, thumbnail, ingredients, href } = props.singleMeal;

  return (
    <MealContainer>
      <Title>{title}</Title>
      <Image>{thumbnail}</Image>
      <Ingredients ingredients={ingredients} />
      <a href={singleMeal.href}>{href}</a>
    </MealContainer>
  );
};

export default singleMeal;
