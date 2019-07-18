import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
  color: gray;
  margin-top: 10px;
  text-align: center;
`;

const paragraph = props => {
  return <StyledParagraph>{props.children}</StyledParagraph>;
};

export default paragraph;
