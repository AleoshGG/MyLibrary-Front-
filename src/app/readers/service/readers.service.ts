import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iReader } from '../models/iReader';
import { Observable } from 'rxjs';
import { iStatus } from '../models/iStatus';

@Injectable({
  providedIn: 'root',
})
export class ReadersService {
  private url_base = 'http://3.218.139.134:3000/readers/';

  constructor(private _http: HttpClient) {}

  addReader(reader: iReader): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(`${this.url_base}add`, reader, { headers });
  }

  searchReader(name: string): Observable<iReader> {
    const encodedName = encodeURIComponent(name);
    return this._http.get<iReader>(`${this.url_base}reader/${encodedName}`);
  }

  setStatus(status: iStatus): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(`${this.url_base}status`, status, { headers });
  }

  deleteAccount(id_reader: number): Observable<any> {
    return this._http.delete(`${this.url_base}delete/${id_reader}`);
  }
}
