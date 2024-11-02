import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iReader } from '../models/iReader';
import { iBook } from '../models/iBook';

@Component({
  selector: 'details-search',
  templateUrl: './details-search.component.html',
  styleUrl: './details-search.component.css',
})
export class DetailsSearchComponent {
  @Output() addBooks = new EventEmitter<number>();
  @Input() reader: iReader = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  };

  @Input() work: string = 'show';

  @Input() book: iBook = {
    id_book: 0,
    title: '',
    date_publication: '',
    amount: 0,
    editorial: '',
    id_literery_genre: 0,
  };

  add(): void {
    const { id_book } = this.book;
    this.addBooks.emit(id_book);
  }
}
