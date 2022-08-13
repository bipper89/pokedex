import {IPokemonCat} from "./pokemon-cat.interface";

export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: IPokemonCat[];
}
