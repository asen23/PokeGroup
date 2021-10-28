import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: true,
    pokemon: {
        id: 0,
        name: '',
        weight: 0,
        height: 0,
        types: [],
        abilities: [],
        imageURL: '',
    },
};

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemon: (state, action) => {
            state.pokemon = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setPokemon, setLoading } = pokemonSlice.actions;
export default pokemonSlice.reducer;
