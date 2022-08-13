import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {PokemonsService} from "../../modules/pokedex/services/pokemons.service";
import * as pokemonActions from "./pokemon.actions"
import {map, mergeMap} from "rxjs";

@Injectable()
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private pokemonsService: PokemonsService
  ) {}

  searchPokemon$ = createEffect(() => this.actions$.pipe(
    ofType(pokemonActions.searchPokemon),
    mergeMap((response) =>
      this.pokemonsService.searchPokemon(response.param).pipe(
      map(pokemon => pokemonActions.setPokemon({pokemon}))
    ))
  ));
}
