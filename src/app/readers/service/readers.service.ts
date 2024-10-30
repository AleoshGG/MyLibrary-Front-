import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iReader } from '../models/iReader';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReadersService {
  private url_base = 'http://localhost:3000/readers/';

  constructor(private _http: HttpClient) {}

  addReader(reader: iReader): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(`${this.url_base}add`, reader, { headers });
  }
}
