import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';
import { iJoinBL } from '../models/iJoinBL';
import { iJoinAW } from '../models/iJoinAW';
import { NationalitiesService } from '../service/nationalities.service';
import { LiteraryGenresService } from '../service/literary-genres.service';
import { iNationality } from '../../authors/models/iNationality';
import { iLiteraryGenre } from '../../books/models/iLiteraryGenre';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css',
})
export class EditFormComponent implements OnInit {
  id_book: number = parseInt(localStorage.getItem('id_book') || '0');

  author: iJoinAW = {
    id_author: 0,
    first_name: '',
    last_name: '',
    birthdate: '',
    nationality: 0,
    place_birth: '',
    writings: {
      id_writing: 0,
      id_book: 0,
      id_author: 0,
    },
  };

  book: iJoinBL = {
    id_book: 0,
    title: '',
    date_publication: '',
    amount: 0,
    editorial: '',
    id_literary_genre: 0,
    Literary_genre: {
      id_literary_genre: 0,
      genre_name: '',
    },
  };

  nationalities: iNationality[] = [];
  genres: iLiteraryGenre[] = [];

  constructor(
    private _Info: InfoService,
    private _service: NationalitiesService,
    private _serviceJ: LiteraryGenresService
  ) {}

  ngOnInit(): void {
    this._Info.getInfo(this.id_book).subscribe((response) => {
      console.log(response), (this.author = response);
    });

    this._Info.searchBook(this.id_book).subscribe((response) => {
      console.log(response), (this.book = response);
    });

    this._service.getNationalities().subscribe((response) => {
      console.log(response), (this.nationalities = response);
    });

    this._serviceJ
      .getGenres()
      .subscribe((respose) => (console.log(respose), (this.genres = respose)));
  }
  
}
