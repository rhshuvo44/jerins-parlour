import axios from "axios";

const servicesApi = axios.create({
  baseURL: "http://localhost:5000/",
});

export default servicesApi;
