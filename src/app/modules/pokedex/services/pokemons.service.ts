import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {map, Observable} from "rxjs";
import {IPokemonCat} from "../models/pokemon-cat.interface";
import {IResponse} from "../models/response.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  pokemonsApi = environment.pokemonAPI;

  constructor(
    private http: HttpClient
  ) { }

  fetchPokemons(): Observable<IPokemonCat[]> {
    return this.http.get<IResponse>(this.pokemonsApi).pipe(
      map(({results}) => results as IPokemonCat[]));
  }

  changePage(offset: number): Observable<IPokemonCat[]> {
    return this.http.get<IResponse>(`${this.pokemonsApi}?offset=${offset}&limit=20`).pipe(
      map(({results}) => results as IPokemonCat[])
    );
  }

  showPokemon(url: string): Observable<any> {
    return this.http.get(url);
  }

  searchPokemon(param: string): Observable<any> {
    return this.http.get(`${this.pokemonsApi}/${param}`);
  }
}
