import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemonResponse } from '../interfaces/pokemon-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private network: HttpClient) { }

  readonly API_BASE = 'https://pokeapi.co/api/v2';

  getPokemonList(offset: number, limit: number): Observable<IPokemonResponse> {
      const endpoint = `${this.API_BASE}/pokemon/?offset=${offset}&limit=${limit}`;
      return this.network.get<IPokemonResponse>(endpoint);
    }


}
