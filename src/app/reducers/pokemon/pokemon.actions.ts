import {createAction, props} from "@ngrx/store";

export const searchPokemon = createAction('[Pokemon] Searching pokemon', props<{param: string}>());
export const setPokemon = createAction('[Pokemon] Set pokemon', props<{pokemon: any}>());
export const clearPokemon = createAction('[Pokemon] Clear pokemon');
