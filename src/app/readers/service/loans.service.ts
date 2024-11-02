import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iLoan } from '../models/iLoan';
import { iBook } from '../models/iBook';
import { forkJoin, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoansService {
  private url_base = 'http://3.218.139.134:3000/loans/';

  constructor(private _http: HttpClient) {}

  getNotDelivered(id_reader: number): Observable<iBook[]> {
    return this._http.get<iLoan[]>(`${this.url_base}reader/${id_reader}`).pipe(
      switchMap((loans) => {
        const bookRequests = loans.map(
          (loan) => this.getBookById(loan.id_book) // Get book details for each loan
        );
        return forkJoin(bookRequests); // Wait for all book requests to complete
      })
    );
  }

  private getBookById(id_book: number): Observable<iBook> {
    const url_books: string = 'http://3.218.139.134:3000/books/search/';
    return this._http.get<iBook>(`${url_books}${id_book}`);
  }
}
