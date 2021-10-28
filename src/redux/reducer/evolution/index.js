import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: true,
    pokemons: [],
};

export const evolutionsSlice = createSlice({
    name: 'evolutions',
    initialState,
    reducers: {
        setEvolutionChain: (state, action) => {
            state.pokemons = action.payload;
        },
        setLoading(state, action){
            state.loading = action.payload;
        }
    },
});

export const { setEvolutionChain, setLoading } = evolutionsSlice.actions;
export default evolutionsSlice.reducer;
