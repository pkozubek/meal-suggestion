import React from "react";
import styled from "styled-components";
import Ingredients from "./ingredients";

const MealContainer = styled.div`
  box-shadow: 0 0 10px gray;
  background: white;
  width: 40%;
  margin: 30px auto;
  display: block;

  @media (max-width: 1027px) {
    width: 80%;
  }
`;

const Title = styled.h2`
  font-size: 1.4em;
  display: inline-block;
  margin-right: 10px;
`;

const Image = styled.img`
  width: 140px;
  height: 140px;
  display: block;
  margin: 10px auto;
`;

const singleMeal = props => {
  const { title, thumbnail, ingredients, href } = props.singleMeal;

  return (
    <MealContainer>
      <Title>{title}</Title>
      <a href={href}>(Link)</a>
      <Image alt={title} src={thumbnail} />
      <Ingredients source="recipe" ingredients={ingredients} />
    </MealContainer>
  );
};

export default singleMeal;
