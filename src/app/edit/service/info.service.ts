import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iJoinAW } from '../models/iJoinAW';
import { iJoinBL } from '../models/iJoinBL';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private url_base = 'http://localhost:3000/writings/authors/';

  constructor(private _http: HttpClient) {}

  getInfo(id_book: number): Observable<iJoinAW> {
    return this._http.get<iJoinAW>(`${this.url_base}${id_book}`);
  }

  searchBook(id_book: number): Observable<iJoinBL> {
    return this._http.get<iJoinBL>(`http://localhost:3000/books/search/${id_book}`);
  }

}
