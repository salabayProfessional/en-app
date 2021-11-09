import {createSlice} from '@reduxjs/toolkit';
import { ResultReducer } from './types';

const initialState: ResultReducer = {
  results: [],
};

const result = createSlice({
    name: "result",
    initialState,
    reducers: {
      push_audited_test: (state, {payload}) => {
        state.results = [...state.results, payload];
      },
      delete_results: (state) => {
        state.results = [];
      },
      delete_result: (state, {payload}) => {
        const name = payload.name;
        const index = state.results.findIndex((res) => res.name === name);
        const before = state.results.slice(0, index);
        const after = state.results.slice(index, );
        state.results = [...before, ...after];
      },
    },
    extraReducers: (state: any) => state
});
export const { push_audited_test, delete_results, delete_result } = result.actions;

export default result.reducer;