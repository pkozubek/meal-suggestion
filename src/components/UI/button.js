import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  display: block;
  text-align: center;
  margin: 0 auto;
`;

const button = props => {
  return <StyledButton onClick={props.click}>{props.children}</StyledButton>;
};

export default button;
