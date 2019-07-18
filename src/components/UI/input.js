import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  margin: 10px auto;
  padding: 5px;
  border: 1px solid blue;
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
