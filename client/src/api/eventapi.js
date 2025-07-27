import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/events" });

export const uploadEvent = (formData, token) =>
  API.post("/add", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
