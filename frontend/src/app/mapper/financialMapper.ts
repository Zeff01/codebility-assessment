import { Financial } from "../@types/financial";

export const financialMapper = (data: Financial[]) => {
  return data?.map((_item) => ({
    ..._item,
    date: new Date(_item.date),
  }));
};
