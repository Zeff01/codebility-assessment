import axios, { AxiosInstance } from "axios";

const API_BASE_URL = "https://fakestoreapi.com/";
export const createApiClient = (): AxiosInstance => {
  const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "X-Clone-App/1.0.0 (Android; iOS)",
    },
  });
  return api;
};

export const useApiClient = (): AxiosInstance => {
  return createApiClient();
};
