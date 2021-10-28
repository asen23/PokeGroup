import { combineReducers } from 'redux';
import exampleReducer from './example';
import evolutionReducer from './evolution';
import pokedex from './pokedex';
import pokemonReducer from './pokemon';

export const rootReducer = combineReducers({
    example: exampleReducer,
    evolution: evolutionReducer,
    pokemon: pokemonReducer,
    pokedex: pokedex,
});
