import { useState, useCallback, useEffect } from "react";
import { weatherApiKey } from "../config/index";
import axios from "axios";

interface IWeatherRow {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface IWeather {
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: IWeatherRow[];
}

const useWeather = ({ q }: { q: string }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [weather, setWeather] = useState<IWeather>({
    name: "",
    coord: {
      lon: 0,
      lat: 0,
    },
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    weather: [],
  });

  const fetchCallback = useCallback(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${weatherApiKey}&units=metric`
      )
      .then(({ data }) => {
        setLoading(false);
        setWeather(data);
      });
  }, [q]);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  return {
    weather,
    loading,
  };
};

export default useWeather;
