import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iLiteraryGenre } from '../models/iLiteraryGenre';

@Injectable({
  providedIn: 'root',
})
export class LiteraryGenresService {
  private url_base = 'http://localhost:3000/genres/';

  constructor(private _http: HttpClient) {}

  getGenres(): Observable<iLiteraryGenre[]> {
    return this._http.get<iLiteraryGenre[]>(this.url_base);
  }
}
