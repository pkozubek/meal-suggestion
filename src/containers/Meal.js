import React, { Component } from "react";
import Ingredients from "../components/ingredients";
import SuggestedMeal from "../components/suggestedMeal";
import axios from "axios";

const API_URL = "http://www.recipepuppy.com/api/";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

class Meal extends Component {
  state = {
    ingredientsAdded: [],
    ingredientVal: "",
    suggestedMeals: []
  };

  handleIngridentsChange = event => {
    this.setState({
      ingredientVal: event.target.value
    });
  };

  addIngrident = () => {
    console.log("test");

    this.setState({
      ingredientsAdded: [
        ...this.state.ingredientsAdded,
        this.state.ingredientVal
      ],
      ingredientVal: ""
    });
  };

  generateQuery = () => {
    return API_URL + "?i=" + this.state.ingredientsAdded.join(",");
  };

  getMeal = () => {
    axios.get(CORS_ANYWHERE + this.generateQuery()).then(response => {
      console.log(response.data.results);
      this.setState({ suggestedMeals: response.data.results });
    });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.ingredientVal}
          onChange={this.handleIngridentsChange}
        />
        <button onClick={this.addIngrident}>Add</button>
        <Ingredients ingredients={this.state.ingredientsAdded} />
        <button onClick={this.getMeal}>Generuj</button>
        <SuggestedMeal meals={this.state.suggestedMeals} />
      </div>
    );
  }
}

export default Meal;
