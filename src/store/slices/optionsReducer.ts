import {createSlice} from '@reduxjs/toolkit';
import { OptionsReducer } from './types';


const initialState: OptionsReducer = {
  options: {
    timer: 60,
    words: 10,
    type: "en-ua",
    random: true,
  }
};

const options = createSlice({
    name: "options",
    initialState,
    reducers: {
      set_options: (state, action) => {
        state.options = action.payload;
      },
    },
    extraReducers: (state: any) => state
});
export const { set_options } = options.actions;

export default options.reducer;