import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.API_URL || "https://www.themealdb.com/api/json/v1/1",
  headers: {
    "Content-Type": "application/json",
  },
});
