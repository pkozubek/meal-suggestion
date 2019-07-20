import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 0 auto;
  margin-bottom: 35px;
  font-size: 1.6em;
  width: 60%;
  padding: 5px;
  border: none;
  border-bottom: 1px solid blue;
  box-shadow: none;
  background: none;
  font-family: "Indie Flower", cursive;
  color: blue;
  text-align: center;

  @media (max-width: 1027px) {
    width: 80%;
  }
`;

const input = props => {
  const { enterHandler } = props;

  const enterPress = event => {
    if (event.key === "Enter") {
      enterHandler(event);
    }
  };

  return <StyledInput onKeyDown={enterPress} />;
};

export default input;
