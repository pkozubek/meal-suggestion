import axios from "axios";

const API_URL = "http://www.recipepuppy.com/api/";
const CORS_ANYWHERE = "https://cors-anywhere.herokuapp.com/";

const generateQuery = ingredients => {
  return CORS_ANYWHERE + API_URL + "?i=" + ingredients.join(",");
};

export const getMeal = async ingridientsAdded => {
  const results = await axios
    .get(generateQuery(ingridientsAdded))
    .then(response => {
      let { results } = response.data;
      return results;
    });

  return results;
};
