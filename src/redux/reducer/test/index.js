import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    test: 0,
};

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addTest: (state) => {
            //addTest
        },
    },
});

export const { addTest } = testSlice.actions;
export default testSlice.reducer;
