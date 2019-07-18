import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  width: auto;
  height: 20px;
  color: white;
  background: blue;
  border-radius: 4px;
  margin: 5px;
  padding: 5px;

  &:hover {
    cursor: not-allowed;
  }
`;

const singleIngredients = props => {
  const { name, click } = props;
  return <Tag onClick={() => click(name)}>{name}</Tag>;
};

export default singleIngredients;
