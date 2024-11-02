import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iJoinBL } from '../models/iJoinBL';


@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private url_base = 'http://3.218.139.134:3000/books/';

  constructor(private _http: HttpClient) {}

  getBooks(): Observable<iJoinBL[]> {
    return this._http.get<iJoinBL[]>(this.url_base);
  }

}
