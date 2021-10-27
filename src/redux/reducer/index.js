import { combineReducers } from 'redux';
import exampleReducer from './example';
import evolutionReducer from './evolution';

export const rootReducer = combineReducers({
    example: exampleReducer,
    evolution: evolutionReducer,
});
