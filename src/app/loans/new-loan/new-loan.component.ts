import { Component } from '@angular/core';
import { iDataReader } from '../models/iDataReader';

@Component({
  selector: 'new-loan',
  templateUrl: './new-loan.component.html',
  styleUrl: './new-loan.component.css',
})
export class NewLoanComponent {
  dataReader: iDataReader = {
    id_reader: 0,
    account_status: '',
  };

  books_ids: number[] = [];

  getDataReader(dataReader: iDataReader): void {
    this.dataReader = dataReader;
    console.log(dataReader);
  }

  addBooks(id_book: number): void {
    this.books_ids.push(id_book);
    console.log(this.books_ids);
  }
}
