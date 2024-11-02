import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iBook } from '../models/iBook';

@Injectable({
  providedIn: 'root',
})
export class NewBookService {
  private url_base = 'http://3.218.139.134:3000/books/add';

  constructor(private _http: HttpClient) {}

  postBook(book: iBook): Observable<{ id_book: number }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post<{id_book: number}>(this.url_base, book, { headers });
  }
}
