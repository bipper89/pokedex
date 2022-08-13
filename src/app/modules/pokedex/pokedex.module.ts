import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './views/pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonSearchComponent } from './components/pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './views/pokemon-detail/pokemon-detail.component';
import {MaterialModule} from "../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { PokedexComponent } from './views/pokedex/pokedex.component';
import {PokedexRoutingModule} from "./pokedex-routing.module";
import { AbilitiesComponent } from './components/abilities/abilities.component';
import { StatsComponent } from './components/stats/stats.component';
import { TypesComponent } from './components/types/types.component';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonCardComponent,
    PokemonSearchComponent,
    PokemonDetailComponent,
    PokedexComponent,
    AbilitiesComponent,
    StatsComponent,
    TypesComponent
  ],
  exports: [
    PokemonListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PokedexRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PokedexModule { }
