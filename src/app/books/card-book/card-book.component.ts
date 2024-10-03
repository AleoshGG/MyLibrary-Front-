import { Component, Input } from '@angular/core';
import { iJoinBL } from '../../registration-page/models/iJoinBL';
import { iLiteraryGenre } from '../models/iLiteraryGenre';

@Component({
  selector: 'app-card-book',
  templateUrl: './card-book.component.html',
  styleUrl: './card-book.component.css',
})
export class CardBookComponent {
  @Input() book: iJoinBL = {
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
    author: [
      {
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
      },
      {
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
      },
      {
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
      },
    ],
  };

  convertDate(dateString: string): string {
    const date = new Date(dateString);
    const day = ('0' + date.getDate()).slice(-2); 
    const month = ('0' + (date.getMonth() + 1)).slice(-2); 
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }
}
