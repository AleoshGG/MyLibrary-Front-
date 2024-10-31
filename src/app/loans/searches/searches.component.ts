import { Component, EventEmitter, Output } from '@angular/core';
import { LoansService } from '../service/loans.service';
import { iReader } from '../models/iReader';
import { iDataReader } from '../models/iDataReader';
import { iBook } from '../models/iBook';

@Component({
  selector: 'searches',
  templateUrl: './searches.component.html',
  styleUrl: './searches.component.css',
})
export class SearchesComponent {
  @Output() searchData = new EventEmitter<iDataReader>();
  @Output() addBooks = new EventEmitter<number>();

  flagDetails: boolean = false;
  readerName: string = '';
  bookTitle: string = '';
  books_ids: number[] = [];

  reader: iReader = {
    id_reader: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    account_status: '',
  };

  dataReader: iDataReader = {
    id_reader: 0,
    account_status: '',
  };

  book: iBook = {
    id_book: 0,
    title: '',
    date_publication: '',
    amount: 0,
    editorial: '',
    id_literery_genre: 0,
  };

  constructor(private _service: LoansService) {}

  searchReader(): void {
    const name = this.readerName;
    this._service.searchReader(name).subscribe({
      next: (response) => {
        this.reader = response;
        const { id_reader, account_status } = this.reader;
        this.dataReader.id_reader = id_reader || 0;
        this.dataReader.account_status = account_status || '';
        this.flagDetails = true;
        this.searchData.emit(this.dataReader);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  searchBook(): void {
    const name = this.bookTitle;
    this._service.searchBook(name).subscribe({
      next: (response) => {
        console.log(response);
        this.book = response;
        this.flagDetails = true;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  addBook(id_book: number): void {
    this.books_ids.push(id_book);
    console.log(this.books_ids);
  }
}
