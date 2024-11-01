import { Component } from '@angular/core';
import { iLoan } from '../models/iLoan';
import { iDataReader } from '../models/iDataReader';
import { LoansService } from '../service/loans.service';
import { iStatusLoan } from '../models/iStatusLoan';

@Component({
  selector: 'delivery',
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent {
  dataReader: iDataReader = {
    id_reader: 0,
    account_status: '',
  };

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

  deleteLoan(): void {
    if (this.books_ids.length <= 0) {
      return alert('No se agregaron libros');
    }

    const { id_reader } = this.dataReader;

    this.books_ids.forEach((book) => {
      const status: iStatusLoan = {
        id_reader: id_reader,
        status: 'delivered',
        id_book: book,
      };

      this.service.setStatusLoan(status).subscribe({
        next: (response) => {
          if(response[0] === 0) {
            alert("No se actualizo un libro, porque no estaba en la lista de prestados")
          }
          console.log(response);
        },
        error: (err) => {
          console.error(err);
        },
      });

      this.service.deleteLoan(id_reader).subscribe({
        next(response) {
            console.log(response);
        },
        error(err) {
            console.error(err);
        },
      })
    });
  }
}
