import { Component } from '@angular/core';
import { iDataReader } from '../models/iDataReader';
import { iLoan } from '../models/iLoan';
import { LoansService } from '../service/loans.service';

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

  delivery_date: string = '0000-00-00';
  books_ids: number[] = [];

  constructor(private service: LoansService) {}

  getDataReader(dataReader: iDataReader): void {
    this.dataReader = dataReader;
    console.log(dataReader);
  }

  addBooks(id_book: number): void {
    this.books_ids.push(id_book);
    console.log(this.books_ids);
  }

  addLoan(): void {
    alert('Hola');
    const { id_reader } = this.dataReader;
    const delivery = this.delivery_date;
    const loanDate = new Date().toISOString;
    const books = this.books_ids;

    console.log(books.length);
    if (books.length > 0) {
      books.forEach((id_book) => {
        const loan: iLoan = {
          id_reader: id_reader,
          id_book: id_book,
          loan_date: loanDate.toString(),
          delivery_date: delivery,
          status: 'not_delivered',
        };

        this.service.addNewLoan(loan).subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (err) => {
            console.error(err);
          },
        });
      });
    }
  }
}
