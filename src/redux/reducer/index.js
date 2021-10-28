import { combineReducers } from 'redux';
import exampleReducer from './example';
import evolutionReducer from './evolution';
import pokedex from './pokedex'

export const rootReducer = combineReducers({
    example: exampleReducer,
    evolution: evolutionReducer,
    pokedex: pokedex,
});
