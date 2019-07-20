import React, { Component } from "react";

import Ingredients from "../components/ingredients";
import SuggestedMeals from "../components/suggestedMeals";
import Paragraph from "../components/UI/paragraph";
import Logo from "../components/UI/logo";
import Form from "./Form";

import * as api from "../API/API";

class Main extends Component {
  state = {
    ingredientsAdded: [],
    suggestedMeals: []
  };

  loadMeals = () => {
    api.getMeal(this.state.ingredientsAdded).then(dataTab => {
      this.setState({
        suggestedMeals: dataTab
      });
    });
  };

  handleIngridentsChange = event => {
    const { value } = event.target;
    if (!this.state.ingredientsAdded.includes(value)) {
      this.setState({
        ingredientsAdded: [...this.state.ingredientsAdded, value]
      });
    }
  };

  handleDelete = ingredientsToDelete => {
    this.setState({
      ingredientsAdded: this.state.ingredientsAdded.filter(
        element => element !== ingredientsToDelete
      )
    });
  };

  addIngrident = () => {
    this.setState({
      ingredientsAdded: [
        ...this.state.ingredientsAdded,
        this.state.ingredientVal
      ],
      ingredientVal: ""
    });
  };

  render() {
    return (
      <div>
        <Logo />
        {this.state.ingredientsAdded.length > 0 ? (
          <Paragraph>You are looking for meals with: </Paragraph>
        ) : null}
        <Ingredients
          deleteIngredient={this.handleDelete}
          ingredients={this.state.ingredientsAdded}
        />
        <Form
          loadMeals={this.loadMeals}
          inputChange={this.handleIngridentsChange}
        />
        <SuggestedMeals meals={this.state.suggestedMeals} />
      </div>
    );
  }
}

export default Main;
