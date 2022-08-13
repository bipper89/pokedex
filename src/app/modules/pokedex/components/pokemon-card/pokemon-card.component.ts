import {Component, Input, OnInit} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() url!: string;
  pokemon!: any

  constructor(
    private pokemonsService: PokemonsService
  ) { }

  ngOnInit(): void {
    this.pokemonsService.showPokemon(this.url).subscribe(
      res => {
        this.pokemon = res;
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

}
