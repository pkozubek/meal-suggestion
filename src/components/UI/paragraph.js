import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: blue;
  margin-bottom: 10px;
  text-align: center;
  font-family: "Indie Flower", cursive;
  font-size: 1.5em;
  margin-block-end: 4px;
`;

const paragraph = props => {
  return <StyledParagraph>{props.children}</StyledParagraph>;
};

export default paragraph;
