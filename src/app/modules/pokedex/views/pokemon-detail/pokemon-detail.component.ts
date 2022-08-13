import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers";
import {Router} from "@angular/router";
import {clearPokemon} from "../../../../reducers/pokemon/pokemon.actions";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon: any;
  isLoading!: boolean;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.select('pokemon').subscribe(
      ({pokemon, loading}) => {
        this.pokemon = pokemon;
        this.isLoading = loading
      });
  }

  changeBG() {
    return {
      'bg-emerald-500': this.pokemon?.types[0]?.type?.name === 'grass',
      'bg-red-500': this.pokemon?.types[0]?.type?.name === 'fire',
      'bg-cyan-500': this.pokemon?.types[0]?.type?.name === 'water',
      'bg-sky-200': this.pokemon?.types[0]?.type?.name === 'ice',
      'bg-yellow-500': this.pokemon?.types[0]?.type?.name === 'electric',
      'bg-gray-500': this.pokemon?.types[0]?.type?.name === 'rock',
      'bg-gray-300': this.pokemon?.types[0]?.type?.name === 'steel',
      'bg-rose-300': this.pokemon?.types[0]?.type?.name === 'normal',
      'bg-rose-700': this.pokemon?.types[0]?.type?.name === 'dragon',
      'bg-violet-500': this.pokemon?.types[0]?.type?.name === 'poison',
      'bg-violet-900': this.pokemon?.types[0]?.type?.name === 'ghost',
      'bg-stone-500': this.pokemon?.types[0]?.type?.name === 'ground',
      'bg-rose-500': this.pokemon?.types[0]?.type?.name === 'fighting',
      'bg-green-500': this.pokemon?.types[0]?.type?.name === 'bug',
      'bg-fuchsia-200': this.pokemon?.types[0]?.type?.name === 'fairy',
      'bg-amber-700': this.pokemon?.types[0]?.type?.name === 'psychic',
      'bg-gray-900': this.pokemon?.types[0]?.type?.name === 'dark',
      'bg-teal-300': this.pokemon?.types[0]?.type?.name === 'flying'
    }
  }

  onNavigate = () => {
    this.router.navigate(['list']);
    this.store.dispatch(clearPokemon());
  }
}
