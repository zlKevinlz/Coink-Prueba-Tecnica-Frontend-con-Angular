import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  listPeople(page: number, filter: any): Observable<any> {
    let url = 'https://rickandmortyapi.com/api/character/';

    if (page) {
      url = `${url}?page=${page}`;
    }

    if (filter.name != null && filter.name != '') {
      url = `${url}&name=${filter.name}`;
    }

    if (filter.type != null && filter.type != '') {
      url = `${url}&type=${filter.type}`;
    }

    return this._httpClient.get(url);
  }
}
