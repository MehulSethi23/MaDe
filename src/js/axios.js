import axios from "axios";

//baseURL
const API = axios.create({
  baseURL: "https://reqres.in/api/users?page=1",
});

export default API;