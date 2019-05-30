import axios from "axios";

const KEY = "AIzaSyDOc4rp6fo5T06H_F7SDttA-FJeAMKYzqc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
});
