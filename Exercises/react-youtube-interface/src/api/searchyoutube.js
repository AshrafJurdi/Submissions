import axios from "axios";

const KEY = "AIzaSyC89ItCrrv75s5oygkEjEgMLOI50xcQ-8c";

export default axios.create({
  baseURL: "https://apis.google.com/js/api.js",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
    
  },
});
