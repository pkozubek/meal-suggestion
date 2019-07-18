import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  padding: 5px;
  border: 1px solid blue;
  width: 150px;
  height: 30px;
  border-radius: 8px;
  margin: 0 auto;
  display: block;
  color: blue;
`;

const select = props => {
  const { options, change } = props;

  return (
    <StyledSelect onChange={change}>
      {options.map(singleOption => (
        <option key={singleOption}>{singleOption}</option>
      ))}
    </StyledSelect>
  );
};

export default select;
