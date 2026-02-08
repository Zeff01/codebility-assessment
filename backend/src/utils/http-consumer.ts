import {
  BadGatewayException,
  HttpException,
  Logger,
  ServiceUnavailableException,
} from "@nestjs/common";
import axios, { AxiosInstance } from "axios";

export const api = (baseURL: string, token = ""): AxiosInstance => {
  const instance = axios.create({
    baseURL,
    timeout: 10_000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (token) {
    instance.defaults.headers.common = { Authorization: `Bearer ${token}` };
  }

  instance.interceptors.response.use(
    (res) => res,
    (err) => {
      Logger.log("axios error", err?.message ?? err);

      if (err?.code === "ECONNREFUSED" || err?.code === "ETIMEDOUT") {
        return Promise.reject(new ServiceUnavailableException());
      }

      const status = err?.response?.status;
      const data = err?.response?.data;

      if (!status) {
        return Promise.reject(
          new BadGatewayException("Upstream request failed."),
        );
      }

      return Promise.reject(
        new HttpException(data ?? "Upstream error", status),
      );
    },
  );

  return instance;
};

export const genericHttpConsumer = (baseURL = "") => api(baseURL);
