import React, { Component } from "react";
import styled from "styled-components";

import Paragraph from "../components/UI/paragraph";
import Select from "../components/UI/select";
import Button from "../components/UI/button";
import Input from "../components/UI/input";

import * as global from "../globalConst/globalConst";

const StyledForm = styled.div`
  box-shadow: 0 0 10px gray;
  background: ghostwhite;
  width: 40%;
  margin: 25px auto;
  padding: 25px;
  border-radius: 4px;

  @media (max-width: 1027px) {
    width: 60%;
  }
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
