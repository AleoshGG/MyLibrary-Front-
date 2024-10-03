import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iJoinAN } from '../models/iJoinAN';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private url_base = 'http://localhost:3000/authors/';

  constructor(private _http: HttpClient) {}

  getAuthors(): Observable<iJoinAN[]> {
    return this._http.get<iJoinAN[]>(this.url_base);
  }
}
