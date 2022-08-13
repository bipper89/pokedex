import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../reducers";
import * as pokemonActions from "../../../../reducers/pokemon/pokemon.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      param: ['', Validators.required]
    })
  }

  get searchParam() {
    return this.form.get('param')
  }

  onSearch() {
    this.store.dispatch(pokemonActions.searchPokemon({param: this.searchParam?.value}));
    this.form.reset();
    this.router.navigate(['/detail'])
  }

}
