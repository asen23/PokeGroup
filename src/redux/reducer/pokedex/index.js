import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokedex: [],
};

export const pokedexSlice = createSlice({
    name: 'pokedex',
    initialState,
    reducers: {
        addPokedex: (state, action) => {
            state.pokedex.push(...action.payload);
        },
    },
});

export const { addPokedex } = pokedexSlice.actions;
export default pokedexSlice.reducer;
