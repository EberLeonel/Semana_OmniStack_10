import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.76:1717"
});

export default api;
