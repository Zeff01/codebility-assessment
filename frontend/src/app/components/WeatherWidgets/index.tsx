"use client";

import { useGetTodayWeatherQuery } from "@/app/services/RtkQueryService";
import WeatherPreloader from "./WeatherPreloader";
import Image from "next/image";
import { WeatherObj } from "@/app/@types/weather";

const WeatherWidgets = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const { data, isFetching } = useGetTodayWeatherQuery({});

  const weather =
    (data?.weather?.length && data?.weather[0]) || ({} as WeatherObj);

  return (
    <div className="w-full bg-[#21222D] rounded-2xl py-6 px-8">
      {!data || isFetching ? (
        <WeatherPreloader />
      ) : (
        <>
          <h1 className="text-xl font-bold mb-1">
            {data?.name}, {data?.sys?.country}
          </h1>
          <p className="opacity-50">{daysOfWeek[today?.getDay()]}</p>
          <div className="w-full flex flex-col items-center">
            {weather?.icon && (
              <Image
                src={`http://openweathermap.org/img/wn/${weather?.icon}@2x.png`}
                alt="Clouds"
                width={100}
                height={80}
              />
            )}
            <div className="flex gap-4 items-center justify-center mb-8">
              <h1 className="text-6xl">
                {Math.floor(data?.main?.feels_like || 0)}&deg;
              </h1>
              <div>
                <p className="text-lg capitalize">{weather?.main}</p>
                <p className="text-sm opacity-50">
                  {Math.floor(data?.main?.temp_max || 0)}&deg;C
                </p>
                <p className="text-sm opacity-50">
                  {Math.floor(data?.main?.temp_min || 0)}&deg;C
                </p>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="flex flex-col items-center">
                <p className="font-bold">Wind</p>
                <p className="opacity-50">
                  {Math.round((data?.wind?.speed || 0) * 3.6)}k/h
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Humidity</p>
                <p className="opacity-50">
                  {Math.floor(data?.main?.humidity || 0)}%
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Visibility</p>
                <p className="opacity-50">
                  {Math.round((data?.visibility || 0) * 0.001 * 100) / 100}km
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherWidgets;
