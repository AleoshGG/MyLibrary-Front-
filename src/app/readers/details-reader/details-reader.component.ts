import { Component, Input, OnInit } from '@angular/core';
import { iReader } from '../models/iReader';
import { LoansService } from '../service/loans.service';
import { iBook } from '../models/iBook';
import { iStatus } from '../models/iStatus';
import { ReadersService } from '../service/readers.service';

@Component({
  selector: 'details-reader',
  templateUrl: './details-reader.component.html',
  styleUrl: './details-reader.component.css',
})
export class DetailsReaderComponent implements OnInit {
  @Input() reader: iReader = {
    id_reader: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  };

  books: iBook[] = [];

  constructor(
    private service: LoansService,
    private service1: ReadersService
  ) {}

  ngOnInit(): void {
    this.service.getNotDelivered(this.reader.id_reader || 0).subscribe({
      next: (response) => {
        console.log(response);
        this.books = response.flat();
      },
      error: (err) => {
        console.error(err);
      },
    });
    console.log(this.books);
  }

  setStatusSuspended(): void {
    const { id_reader } = this.reader;
    const status: iStatus = {
      id_reader: id_reader || 0,
      status: 'suspended',
    };
    this.service1.setStatus(status).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  setStatusActive(): void {
    const { id_reader } = this.reader;
    const status: iStatus = {
      id_reader: id_reader || 0,
      status: 'active',
    };
    this.service1.setStatus(status).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteAccount(): void {
    const { id_reader } = this.reader;
    this.service1.deleteAccount(id_reader || 0).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
