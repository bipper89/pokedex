import {createReducer, on} from "@ngrx/store";
import * as pokemonsActions from "./pokemons.actions";
import {IPokemonCat} from "../../modules/pokedex/models/pokemon-cat.interface";

export interface pokemonsState {
  pokemons: IPokemonCat[];
  loading: boolean;
  offset: number;
  error: any;
}

export const pokemonsInitialState: pokemonsState = {
  pokemons: [],
  loading: false,
  offset: 0,
  error: null
}

export const pokemonsReducer = createReducer(
  pokemonsInitialState,
  on(pokemonsActions.loadingPokemons, state => ({
    ...state,
    loading: true
  })),
  on(pokemonsActions.setPokemons, (state, {pokemons}) => ({
    ...state,
    loading: false,
    pokemons
  })),
  on(pokemonsActions.nextPagePokemons, (state, {offset}) => ({
    ...state,
    loading: true,
    offset
  })),
  on(pokemonsActions.previousPagePokemons, (state, {offset}) => ({
    ...state,
    loading: true,
    offset
  }))
)
