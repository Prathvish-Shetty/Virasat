import axios, { type AxiosInstance } from "axios";

const BASE_URL: string = 
  import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api" 
    : "/api";

// const BASE_URL: string = "http://localhost:5001/api";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});