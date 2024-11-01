import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iReader } from '../models/iReader';
import { Observable } from 'rxjs';
import { iBook } from '../models/iBook';
import { iLoan } from '../models/iLoan';
import { iStatus } from '../../readers/models/iStatus';

@Injectable({
  providedIn: 'root',
})
export class LoansService {
  private url_base = 'http://localhost:3000/readers/';

  constructor(private _http: HttpClient) {}

  searchReader(name: string): Observable<iReader> {
    const encodedName = encodeURIComponent(name);
    return this._http.get<iReader>(`${this.url_base}reader/${encodedName}`);
  }

  searchBook(name: string): Observable<iBook> {
    return this._http.get<iBook>(
      `http://localhost:3000/books/searchby/${name}`
    );
  }

  /* setStatus(status: iStatus): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(`${this.url_base}status`, status, { headers });
  } */

  deleteLoan(id_reader: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/loans/delete/${id_reader}`);
  }

  deleteAccount(id_reader: number): Observable<any> {
    return this._http.delete(`${this.url_base}delete/${id_reader}`);
  }

  setStatusLoan(newStatus: iStatus): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.put(`http://localhost:3000/loans/status`, newStatus, {
      headers,
    });
  }

  addNewLoan(loan: iLoan): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(`http://localhost:3000/loans/add`, loan, {
      headers,
    });
  }
}
