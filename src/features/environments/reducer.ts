import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Environment } from "../../common/models";

export interface IEnvironmentsState {
  cursor: string | null;
  data: Environment[];
  count: number;
  search: string;
}

export const initialState: IEnvironmentsState = {
  cursor: null,
  data: [],
  count: 0,
  search: ""
};

export const environmentsSlice = createSlice({
  name: "environments",
  initialState,
  reducers: {
    dataFetched: (
      state: IEnvironmentsState,
      action: PayloadAction<{ data: Environment[]; count: number }>
    ) => {
      const { count, data } = action.payload;

      return { ...state, count: count, data: data };
    },
    searched: (
      state: IEnvironmentsState,
      action: PayloadAction<{
        data: Environment[];
        count: number;
        search: string;
        cursor: string | null;
      }>
    ) => {
      return { ...action.payload, cursor: null };
    },
    nextFetched: (
      state: IEnvironmentsState,
      action: PayloadAction<{
        data: Environment[];
        count: number;
        cursor: string | null;
      }>
    ) => {
      const { data, count, cursor } = action.payload;

      const newData = state.data?.concat(data);

      return {
        ...state,
        data: newData,
        count: count,
        cursor: cursor
      };
    }
  }
});

export const { dataFetched, searched, nextFetched } = environmentsSlice.actions;
