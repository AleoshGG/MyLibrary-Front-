import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iJoinAW } from '../models/iJoinAW';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private url_base = 'http://localhost:3000/writings/authors/';

  constructor(private _http: HttpClient) {}

  getAuthors(id_book: number): Observable<iJoinAW[]> {
    return this._http.get<iJoinAW[]>(`${this.url_base}${id_book}`);
  }

}
