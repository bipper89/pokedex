import { Component, OnInit } from '@angular/core';
import * as pokemonsActions from "../../../../reducers/pokemons/pokemons.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }



}
