import React, { Component } from "react";
import styled from "styled-components";

import Paragraph from "../components/UI/paragraph";
import Select from "../components/UI/select";
import Button from "../components/UI/button";
import Input from "../components/UI/input";

import * as global from "../globalConst/globalConst";

const StyledForm = styled.div`
  border: 1px solid black;
  width: 40%;
  margin: 25px auto;
  padding: 25px;
`;

class Form extends Component {
  render() {
    const { inputChange, loadMeals } = this.props;

    return (
      <StyledForm>
        <Paragraph>Choose ingredients: </Paragraph>
        <Select change={inputChange} options={global.ingredients} />
        <Paragraph>Can't find you favourite ingredients? Write it!</Paragraph>
        <Input enterHandler={inputChange} />
        <Button click={loadMeals}>Search</Button>
      </StyledForm>
    );
  }
}

export default Form;
