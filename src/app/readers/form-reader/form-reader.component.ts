import { Component } from '@angular/core';
import { iReader } from '../models/iReader';
import { ReadersService } from '../service/readers.service';
import Swal from 'sweetalert2';

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

  check(reader: iReader): boolean {
    return Object.values(reader).some((field) => field.trim() === '');
  }

  saveReader(): void {
    const { first_name, last_name, email, phone_number } = this.reader;

    const reader: iReader = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      account_status: 'active',
    };

    if (this.check(reader)) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Existen campos vacíos!',
      });
      return;
    }

    this._service.addReader(reader).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
