import axios from "axios";

const api = axios.create({
  // TODO: solve problem with env
  baseURL: "http://localhost:4000",
});

export default api;
