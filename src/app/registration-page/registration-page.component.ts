import { Component } from '@angular/core';
import { iBook } from '../books/models/iBook';

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

  onFormBooksDataReceived(data: iBook):void {
    this.formDataBooks = data;
    console.log(this.formDataBooks);
  }

  saveDataBook():void {
    console.log(this.formDataBooks);
  }
}
