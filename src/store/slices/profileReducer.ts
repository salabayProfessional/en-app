import {createSlice} from '@reduxjs/toolkit';

export interface Profile {

};

const initialState: Profile = {

};

const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {

    },
    extraReducers: (state: any) => state
});
//export const { } = profile.actions;

export default profile.reducer;