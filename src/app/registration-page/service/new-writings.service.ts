import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { iWritings } from '../models/iWritings';

@Injectable({
  providedIn: 'root',
})
export class NewWritingsService {
  private url_base = 'http://3.218.139.134:3000/writings/add';

  constructor(private _http: HttpClient) {}

  postWritings(writings: iWritings): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url_base, writings, { headers });
  }
}
