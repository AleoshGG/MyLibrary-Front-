import { Component } from '@angular/core';
import { iDataReader } from '../models/iDataReader';
import { iLoan } from '../models/iLoan';
import { LoansService } from '../service/loans.service';
import Swal from 'sweetalert2';

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
    const { id_reader, account_status } = this.dataReader;
    const delivery = this.delivery_date;
    const loanDate = new Date().toISOString;
    const books = this.books_ids;

    if (account_status == 'suspended') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La cuenta está suspendida!',
      });
      return;
    }

    if (books.length > 0) {
      if (delivery == '0000-00-00') {
        Swal.fire({
          icon: 'warning',
          title: 'Oops...',
          text: 'Ingresa la fecha de devolución!',
        });
        return;
      }
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
              Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: 'Se registró el préstamo!',
              });
              console.log(response);
            },
            error: (err) => {
              console.error(err);
            },
          });
        });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha agregado libros!',
      });
      return;
    }
  }
}
