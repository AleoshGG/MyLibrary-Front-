import { Component } from '@angular/core';
import { iReader } from '../models/iReader';
import { ReadersService } from '../service/readers.service';

@Component({
  selector: 'form-reader',
  templateUrl: './form-reader.component.html',
  styleUrl: './form-reader.component.css',
})
export class FormReaderComponent {

  reader: iReader = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
  };

  constructor(private _service: ReadersService) {}

  saveReader(): void {
    const { first_name, last_name, email, phone_number } = this.reader;
    const reader: iReader = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      account_status: 'active'
    }

    this._service.addReader(reader).subscribe({
      next: (response) => {
        console.log(response);
      }, 
      error: (error) => {
        console.error(error);
      }
    });
  }
}
