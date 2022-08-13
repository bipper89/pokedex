import {
  ActionReducerMap,
} from '@ngrx/store';
import {pokemonsReducer, pokemonsState} from "./pokemons/pokemons.reducer";
import {pokemonReducer, pokemonState} from "./pokemon/pokemon.reducer";

export interface AppState {
  pokemons: pokemonsState,
  pokemon: pokemonState
}

export const reducers: ActionReducerMap<AppState> = {
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer
};
