import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LiteraryGenresService } from '../services/literary-genres.service';
import { iLiteraryGenre } from '../models/iLiteraryGenre';
import { iBook } from '../models/iBook';

@Component({
  selector: 'app-form-books',
  templateUrl: './form-books.component.html',
  styleUrl: './form-books.component.css',
})
export class FormBooksComponent implements OnInit {
  @Output() formDataEmitter = new EventEmitter<iBook>();

  book: iBook = {
    title: '',
    date_publication: '0000-00-00',
    amount: 0,
    editorial: '',
    id_literary_genre: 0,
  };

  constructor(private _service: LiteraryGenresService) {}

  genres: iLiteraryGenre[] = [];

  ngOnInit(): void {
    this._service
      .getGenres()
      .subscribe((respose) => (console.log(respose), (this.genres = respose)));
  }

  getFormData() {
    const bookData: iBook = {
      title: this.book.title,
      date_publication: this.book.date_publication,
      amount: this.book.amount,
      editorial: this.book.editorial,
      id_literary_genre: this.book.id_literary_genre,
    };

    this.formDataEmitter.emit(bookData);
  }
}
