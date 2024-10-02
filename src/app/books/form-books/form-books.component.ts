import { Component, OnInit } from '@angular/core';
import { LiteraryGenresService } from '../services/literary-genres.service';
import { iLiteraryGenre } from '../models/iLiteraryGenre';

@Component({
  selector: 'app-form-books',
  templateUrl: './form-books.component.html',
  styleUrl: './form-books.component.css',
})
export class FormBooksComponent implements OnInit {
  constructor(private _service: LiteraryGenresService) {}

  genres: iLiteraryGenre[] = [];

  ngOnInit(): void {
    this._service
      .getGenres()
      .subscribe((respose) => (console.log(respose), (this.genres = respose)));
  }
}
