import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.2em;
  color: blue;
  text-align: center;
`;

const logo = props => {
  return <Title>Suggest meal</Title>;
};

export default logo;
