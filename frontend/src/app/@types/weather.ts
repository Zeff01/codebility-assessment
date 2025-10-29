export type Weather = {
  name: string;
  visibility: number;
  main: WeatherMain;
  sys: {
    country: string;
  };
  weather: Array<WeatherObj>;
  wind: {
    speed: number;
  };
};

type WeatherMain = {
  feels_like: number;
  temp_max: number;
  temp_min: number;
  humidity: number;
};

export type WeatherObj = {
  main: string;
  icon: string;
};
