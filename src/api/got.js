import axios from "axios";

export default axios.create({
  baseURL: "https://api.nal.usda.gov/fdc/v1/foods/search",
});