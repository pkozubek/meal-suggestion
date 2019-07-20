import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: white;
  border: 1px solid blue;
  color: blue;
  padding: 10px;
  border-radius: 4px;
  display: block;
  text-align: center;
  margin: 0 auto;
  transition: background 0.4s;

  &:hover {
    background: blue;
    color: white;
    transition: background 0.4s;
    transition: color 0.5s;
  }
`;

const button = props => {
  return <StyledButton onClick={props.click}>{props.children}</StyledButton>;
};

export default button;
