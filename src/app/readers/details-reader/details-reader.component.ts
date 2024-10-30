import { Component, Input, OnInit } from '@angular/core';
import { iReader } from '../models/iReader';
import { LoansService } from '../service/loans.service';
import { iBook } from '../models/iBook';

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

  constructor(private service: LoansService) {}

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
}
