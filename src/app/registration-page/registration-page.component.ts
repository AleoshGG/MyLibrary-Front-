import { Component, EventEmitter, Output } from '@angular/core';
import { iBook } from '../books/models/iBook';
import { NewBookService } from './service/new-book.service';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { iAuthor } from './models/iAuthor';
import { NewAuthorService } from './service/new-author.service';
import { NewWritingsService } from './service/new-writings.service';
import { iWritings } from './models/iWritings';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css',
})
export class RegistrationPageComponent {
  id_book: number = 0;
  id_author: number = 0;

  formDataBooks: iBook = {
    title: '',
    date_publication: '',
    amount: 0,
    editorial: '',
    id_literary_genre: 0,
  };

  formDataAuthor: iAuthor = {
    first_name: '',
    last_name: '',
    birthdate: '',
    nationality: 0,
    place_birth: '',
  };

  constructor(
    private _POSTbook: NewBookService,
    private _POSTauthor: NewAuthorService,
    private _POSTwritings: NewWritingsService
  ) {}

  onFormBooksDataReceived(data: iBook): void {
    this.formDataBooks = data;
    console.log('Esta es la data', this.formDataBooks);

    this._POSTbook.postBook(this.formDataBooks).subscribe(
      (response) => {
        console.log('Libro guardado con éxito:', response);
        this.id_book = response.id_book;
        Swal.fire({
          icon: 'success',
          title: 'Good',
          text: 'Libro guardado',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      (error) => {
        console.error('Error al guardar el libro:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }

  onFormAuthorsDataReceived(data: iAuthor): void {
    this.formDataAuthor = data;
    console.log('Esta es la data', this.formDataAuthor);

    this._POSTauthor.postAuthor(this.formDataAuthor).subscribe(
      (response) => {
        console.log('Autor guardado con éxito:', response);
        this.id_author = response.id_author;

        const writings: iWritings = {
          id_author: this.id_author,
          id_book: this.id_book,
        };

        this._POSTwritings.postWritings(writings).subscribe(
          (response) => {
            console.log('Escrito guardado con éxito:', response);
            Swal.fire({
              icon: 'success',
              title: 'Good',
              text: 'Datos guardados',
              showConfirmButton: false,
              timer: 1500,
            });
          },
          (error) => {
            console.error('Error al guardar el escrito:', error);
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocurrió un error!',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        );
      },
      (error) => {
        console.error('Error al guardar el autor:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ocurrió un error!',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    );
  }
}
