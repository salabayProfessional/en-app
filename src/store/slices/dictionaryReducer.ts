import {createSlice} from '@reduxjs/toolkit';

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
            const start = state.dictionaryTests.slice(0, action.payload.id);
            const end = state.dictionaryTests.slice(action.payload.id + 1);
            state.dictionaryTests = [...start, ...end];
        },
    },
    extraReducers: (state: any) => state
});

export const { add_dictionary_part, delete_dictionary_part } = dictionary.actions;

export default dictionary.reducer;