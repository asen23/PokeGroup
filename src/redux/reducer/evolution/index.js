import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pokemons: [],
};

export const evolutionsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setEvolutionChain: (state, action) => {
            state.pokemons = action.payload;
        },
    },
});

export const { setEvolutionChain } = evolutionsSlice.actions;
export default evolutionsSlice.reducer;
