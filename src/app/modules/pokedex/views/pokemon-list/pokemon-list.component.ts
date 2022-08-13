import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers";
import * as pokemonsActions from '../../../../reducers/pokemons/pokemons.actions';
import {IPokemonCat} from "../../models/pokemon-cat.interface";
import * as pokemonActions from '../../../../reducers/pokemon/pokemon.actions';
import {Router} from "@angular/router";
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  offset!: number;
  pokemons: IPokemonCat[] = [];

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select('pokemons').subscribe(
      ({pokemons, offset}) => {
        this.pokemons = pokemons;
        this.offset = offset;
      }
    )
    if (this.pokemons.length === 0) {
      this.store.dispatch(pokemonsActions.loadingPokemons());
    }
  }

  onSelectPokemon(url: string) {
    const newURL = new URL(url);
    const param = newURL.pathname.trim().split('/')
    this.store.dispatch(pokemonActions.searchPokemon({param: param[4]}))
    this.router.navigate(['/detail']);
  }

  nextPage() {
    this.store.dispatch(pokemonsActions.nextPagePokemons({offset: this.offset + 20}))
  }

  previousPage() {
    this.store.dispatch(pokemonsActions.nextPagePokemons({offset: this.offset - 20}))
  }

}
