import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iJoinAW } from '../models/iJoinAW';
import { iJoinBL } from '../models/iJoinBL';
import { iBook } from '../models/iBook';
import { iAuthor } from '../models/iAuthor';

@Injectable({
  providedIn: 'root',
})
export class InfoService {
  private url_base = 'http://3.218.139.134:3000/writings/authors/';

  constructor(private _http: HttpClient) {}

  getInfo(id_book: number): Observable<iJoinAW[]> {
    return this._http.get<iJoinAW[]>(`${this.url_base}${id_book}`);
  }

  searchBook(id_book: number): Observable<iJoinBL[]> {
    return this._http.get<iJoinBL[]>(`http://3.218.139.134:3000/books/search/${id_book}`);
  }

  deleteBook(id_book: number): Observable<any> {
    return this._http.delete(`http://3.218.139.134:3000/books/delete/${id_book}`);
  }

  updateBook(id_book: number, book: iBook): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(`http://3.218.139.134:3000/books/update/${id_book}`, book, { headers });
  }

  updateAuthor(id_author: number, author: iAuthor): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(`http://3.218.139.134:3000/authors/update/${id_author}`, author, { headers });
  }
}
