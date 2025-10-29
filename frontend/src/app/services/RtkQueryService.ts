import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiGetTodayWeather } from "./WeatherService";
import { apiGetFinancialData } from "./FinancialService";

const RtkQueryService = createApi({
  reducerPath: "rtkApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (build) => ({
    getTodayWeather: build.query({
      queryFn: async () => {
        try {
          const data = await apiGetTodayWeather();
          return {
            data: data,
          };
        } catch (error) {
          return {
            error,
          };
        }
      },
    }),
    getFinancialData: build.query({
      queryFn: async () => {
        try {
          const data = await apiGetFinancialData();
          return {
            data: data,
          };
        } catch (error) {
          return {
            error,
          };
        }
      },
    }),
  }),
});

export const { useGetTodayWeatherQuery, useGetFinancialDataQuery } =
  RtkQueryService;

export default RtkQueryService;
