import {createAction, props} from "@ngrx/store";
import {IPokemonCat} from "../../modules/pokedex/models/pokemon-cat.interface";

export const loadingPokemons = createAction('[Pokemons] Loading pokemons');
export const setPokemons = createAction('[Pokemons] Set pokemons', props<{pokemons: IPokemonCat[]}>())
export const nextPagePokemons = createAction('[Pokemons] Next page pokemons', props<{offset: number}>())
export const previousPagePokemons = createAction('[Pokemons] Previous page pokemons', props<{offset: number}>())
