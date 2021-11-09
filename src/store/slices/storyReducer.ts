import {createSlice} from '@reduxjs/toolkit';

export interface Story {

};

const initialState: Story = {

};

const story = createSlice({
    name: "story",
    initialState,
    reducers: {

    },
    extraReducers: (state: any) => state
});
//export const { } = story.actions;

export default story.reducer;