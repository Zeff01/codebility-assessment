import {create, type StoreApi, type UseBoundStore } from "zustand";
import { createTodoStore, type TodoSlice } from "./todo.store";

type StoreState = TodoSlice ; 

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
  _store: S
) => {
  let store = _store as WithSelectors<typeof _store>;
  store.use = {};

  for (let k of Object.keys(_store.getState())) {
    (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
  }

  return store;
};

const useStoreBase = create<StoreState>()((...a) => ({
  ...createTodoStore(...a),
}));

export const useStore = createSelectors(useStoreBase);