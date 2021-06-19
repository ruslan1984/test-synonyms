import { createSlice, PayloadAction, createAction } from "@reduxjs/toolkit";
import { SynonymsType, ItemType, ModeType } from "./types";

export const defaultState: SynonymsType = {
  list: [
    {
      id: 1,
      name: "Процент",
    },
    {
      id: 2,
      name: "Золотая",
    },
    {
      id: 3,
      name: "Премиум",
    },
    {
      id: 4,
      name: "Кредит",
    },
  ],
  mode: "base",
};
export const testSlice = createSlice({
  name: "test",
  initialState: defaultState,
  reducers: {
    setData: (state, { payload }: PayloadAction<ItemType[]>) => ({
      ...state,
      list: payload,
    }),
    add: (state, { payload }: PayloadAction<string>) => {
      const list: ItemType[] = [...state.list];
      const maxId: number = list.reduce(
        (max: number, item: ItemType) => (max < item.id ? item.id : max),
        0
      );
      list.push({
        id: maxId + 1,
        name: payload,
      });
      return { ...state, list };
    },
    remove: (state, { payload }: PayloadAction<number>) => {
      const currentList = [...state.list];
      const list = currentList.filter((item) => item.id !== payload);
      return { ...state, list };
    },
    edit: (state, { payload }: PayloadAction<ItemType>) => {
      const currentList = [...state.list];
      const list = currentList.map((item) =>
        item.id === payload.id ? { id: item.id, name: payload.name } : item
      );
      return { ...state, list };
    },
    clear: (state) => {
      return { ...state, list: [] };
    },
    setMode: (state, { payload }: PayloadAction<ModeType>) => {
      return { ...state, mode: payload };
    },
  },
});

export const saveData = createAction("saveData");
export const request = createAction("request");
export const { actions, reducer } = testSlice;
