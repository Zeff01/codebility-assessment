export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      JWT_SECRET: string;
      WEATHER_API_KEY: string;
    }
  }
}
