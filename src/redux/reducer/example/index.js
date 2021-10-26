import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    example: 0,
};

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        addExample: state => {
            state.example++;
        },
    },
});

export const { addExample } = exampleSlice.actions;
export default exampleSlice.reducer;
