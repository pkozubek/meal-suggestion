import React from "react";
import styled from "styled-components";

const Tag = styled.div`
  width: auto;
  height: 20px;
  color: white;
  background: ${props => (props.source === "recipe" ? "gray" : "blue")};
  border-radius: 4px;
  margin: 5px;
  padding: ${props => (props.source === "receipe" ? "5px" : "10px")};

  &:hover {
    cursor: ${props => (props.source === "recipe" ? "pointer" : "default")};
  }
`;

const singleIngredients = props => {
  const { name, click, source } = props;
  return (
    <Tag
      source={source}
      onClick={source === "recipe" ? null : () => click(name)}
    >
      {name}
    </Tag>
  );
};

export default singleIngredients;
