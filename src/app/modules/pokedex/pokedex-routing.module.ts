import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PokemonListComponent} from "./views/pokemon-list/pokemon-list.component";
import {PokemonDetailComponent} from "./views/pokemon-detail/pokemon-detail.component";

const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'detail', component: PokemonDetailComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/'}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule {}
