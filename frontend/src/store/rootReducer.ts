import { combineReducers, Reducer } from "redux";
import toast, { ToastState } from "./slices/toast/toastSlice";
import weather, { WeatherState } from "./slices/weather/weatherSlice";
import RtkQueryService from "@/app/services/RtkQueryService";

export type RootState = {
  toast: ToastState;
  weather: WeatherState;
  [RtkQueryService.reducerPath]: Reducer;
};

const staticReducers = {
  toast,
  weather,
  [RtkQueryService.reducerPath]: RtkQueryService.reducer,
};

const rootReducer = combineReducers({
  ...staticReducers,
});

export default rootReducer;
