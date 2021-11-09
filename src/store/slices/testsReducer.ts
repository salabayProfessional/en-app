import {createSlice} from '@reduxjs/toolkit';
import { TestsReducer } from './types';

const initialState: TestsReducer = {
  start: false,
  test: null,
  infoTest: "",
  allTests: [], 
};

const tests = createSlice({
  name: "tests",
  initialState,
  reducers: {
    set_start_test: (state, action) => {
      state.start = action.payload;
    },
    set_test: (state, action) => {
      state.test = action.payload;
    },
    reset_test: (state) => {
      state.test = null;
    },
    set_info_id: (state, {payload}) => {
      state.infoTest = payload;
    },
    create_test: (state, {payload}) => {
      state.allTests = [...state.allTests, payload];
    },
    delete_tests: (state) => {
      state.allTests = [];
    },
    delete_test: (state, {payload}) => {
      const name = payload.name;
      const index = state.allTests.findIndex((test: any) => test.name === name);
      const before = state.allTests.slice(0, index);
      const after = state.allTests.slice(index, );
      state.allTests = [...before, ...after];
    },
  },
  extraReducers: (state: any) => state
});
export const { 
  set_start_test, 
  set_test, 
  set_info_id, 
  create_test, 
  reset_test, 
  delete_test, 
  delete_tests 
} = tests.actions;

export default tests.reducer;