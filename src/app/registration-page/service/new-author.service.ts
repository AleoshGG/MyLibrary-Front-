import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iAuthor } from '../models/iAuthor';

@Injectable({
  providedIn: 'root',
})
export class NewAuthorService {
  private url_base = 'http://3.218.139.134:3000/authors/add';

  constructor(private _http: HttpClient) {}

  postAuthor(author: iAuthor): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url_base, author, { headers });
  }
}
