import { Component } from '@angular/core';
import { ReadersService } from '../service/readers.service';
import { iReader } from '../models/iReader';
import Swal from 'sweetalert2';

@Component({
  selector: 'searcher',
  templateUrl: './searcher.component.html',
  styleUrl: './searcher.component.css',
})
export class SearcherComponent {
  flagDefault: boolean = true;
  flagSearch: boolean = true;
  readerName: string = '';

  reader: iReader = {
    id_reader: 0,
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    account_status: '',
  };

  constructor(private _service: ReadersService) {}

  search(): void {
    this.flagDefault = false;
    const name = this.readerName;
    if(this.readerName === ' ' ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Existen campos vacíos!',
      });
      return;
    }

    this._service.searchReader(name).subscribe({
      next: (response) => {
        this.flagSearch = false;
        this.reader = response;
        console.log(this.reader);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
