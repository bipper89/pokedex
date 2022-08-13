import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as pokemonsActions from './pokemons.actions';
import {map, mergeMap} from "rxjs";
import {PokemonsService} from "../../modules/pokedex/services/pokemons.service";

@Injectable()
export class PokemonsEffects {
  constructor(
    private actions$: Actions,
    private pokemonsService: PokemonsService
  ) {}

  startLoadPokemons$ = createEffect(() => this.actions$.pipe(
    ofType(pokemonsActions.loadingPokemons),
    mergeMap(() => this.pokemonsService.fetchPokemons().pipe(
      map((results) => pokemonsActions.setPokemons({pokemons: results}))
    ))
  ));

  nextPage$ = createEffect(() => this.actions$.pipe(
    ofType(pokemonsActions.nextPagePokemons),
    mergeMap(({offset}) => this.pokemonsService.changePage(offset).pipe(
      map((results) => pokemonsActions.setPokemons({pokemons: results}))
    ))
  ));

  previousPage$ = createEffect(() => this.actions$.pipe(
    ofType(pokemonsActions.previousPagePokemons),
    mergeMap(({offset}) => this.pokemonsService.changePage(offset).pipe(
      map((results) => pokemonsActions.setPokemons({pokemons: results}))
    ))
  ))
}
