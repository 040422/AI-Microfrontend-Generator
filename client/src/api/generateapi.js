import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/generate" });

export const generateCode = (prompt) => API.post("/", { prompt });
