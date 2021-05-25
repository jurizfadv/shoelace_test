import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // GET Request - Get initial list of Pokemon
    getPokemon() {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=1`)
    }

  // GET Request - Get Additional Pokemon
    getAdditionalPokemon(name:string) {
      return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }

}
