import {createSlice} from '@reduxjs/toolkit';

const deleteElementFromArr = (start: number, end: number, arr: any) => {
    return [...arr.slice(0, end), ...arr.slice(start + 1)];
};

const initialState: any = {
    dictionaryTests: [],
}

const dictionary = createSlice({
    name: "dictionary",
    initialState,
    reducers: {
        add_dictionary_part: (state, action) => {
            state.dictionaryTests.push(action.payload);
        },
        delete_dictionary_part: (state, action) => {
            state.dictionaryTests = deleteElementFromArr(0, action.payload.id + 1, state.dictionaryTests);
        },
    },
    extraReducers: (state: any) => state
});

export const { add_dictionary_part, delete_dictionary_part } = dictionary.actions;

export default dictionary.reducer;