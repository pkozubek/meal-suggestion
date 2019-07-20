import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3em;
  color: blue;
  text-align: center;
  font-family: "Indie Flower", cursive;
`;

const logo = props => {
  return <Title>Suggest meal</Title>;
};

export default logo;
