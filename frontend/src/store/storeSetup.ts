import { configureStore, Middleware, Reducer } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import RtkQueryService from "@/app/services/RtkQueryService";
import { handleErrorMiddleware } from "./handleErrorMiddleware";

const middlewares: Middleware[] = [
  RtkQueryService.middleware,
  handleErrorMiddleware,
];

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer as Reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
