import {createReducer, on} from "@ngrx/store";
import * as pokemonActions from './pokemon.actions';

export interface pokemonState {
  pokemon: {} | null;
  loading: boolean;
  error: any;
  searchParam: string;
}

export const pokemonsInitialState: pokemonState = {
  pokemon: null,
  loading: false,
  error: null,
  searchParam: ''
}

export const pokemonReducer = createReducer(
  pokemonsInitialState,
  on(pokemonActions.searchPokemon, (state, {param}) =>({
    ...state,
    loading: true,
    searchParam: param
  })),
  on(pokemonActions.setPokemon, (state, {pokemon}) => ({
    ...state,
    loading: false,
    pokemon
  })),
  on(pokemonActions.clearPokemon, (state => ({
    ...state,
    pokemon: null
  })))
)
