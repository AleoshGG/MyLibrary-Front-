import { Component } from '@angular/core';
import { iBook } from '../books/models/iBook';
import { NewBookService } from './service/new-book.service';
import Swal from 'sweetalert2'
import { timer } from 'rxjs';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.css'
})
export class RegistrationPageComponent {
  formDataBooks: iBook = {
    title: '',
    date_publication: '',
    amount: 0,
    editorial: '',
    id_literary_genre: 0
  };

  constructor(private _POSTbook: NewBookService) {}

  onFormBooksDataReceived(data: iBook):void {
    this.formDataBooks = data;
    console.log("Esta es la data", this.formDataBooks);

    this._POSTbook.postBook(this.formDataBooks).subscribe(
      response => {
        console.log('Libro guardado con éxito:', response);
        Swal.fire({
          icon: "success",
          title: "Good",
          text: "Libro guardado",
          showConfirmButton: false,
          timer: 1500
        });
      },
      error => {
        console.error('Error al guardar el libro:', error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrió un error!",
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
