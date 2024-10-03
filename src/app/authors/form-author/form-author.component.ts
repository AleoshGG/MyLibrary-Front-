import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NationalitiesService } from '../services/nationalities.service';
import { iNationality } from '../models/iNationality';
import { iAuthor } from '../models/iAuthor';
import { AuthorsService } from '../services/authors.service';
import { iJoinAN } from '../models/iJoinAN';
import { iWritings } from '../../registration-page/models/iWritings';
import { NewWritingsService } from '../../registration-page/service/new-writings.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-author',
  templateUrl: './form-author.component.html',
  styleUrl: './form-author.component.css',
})
export class FormAuthorComponent implements OnInit {
  @Output() formDataEmitter = new EventEmitter<iAuthor>();
  @Input() id_book: number = 0;

  author: iAuthor = {
    first_name: '',
    last_name: '',
    birthdate: '',
    nationality: 0,
    place_birth: '',
  };

  flagForm: boolean = false;
  flagButton: boolean = false;
  flagAuthors: boolean = false;

  constructor(
    private _service: NationalitiesService,
    private _serviceJ: AuthorsService,
    private _POSTwritings: NewWritingsService
  ) {}

  nationalities: iNationality[] = [];
  authors: iJoinAN[] = [];
  selectedAuthors: number[] = [];

  ngOnInit(): void {
    this._service.getNationalities().subscribe((response) => {
      console.log(response), (this.nationalities = response);
    });
  }

  getFormData(): void {
    const authorData: iAuthor = {
      first_name: this.author.first_name,
      last_name: this.author.last_name,
      birthdate: this.author.birthdate,
      nationality: this.author.nationality,
      place_birth: this.author.place_birth,
    };

    this.formDataEmitter.emit(authorData);
  }

  showAuthors(): void {
    this.flagAuthors = true;
    this._serviceJ.getAuthors().subscribe((response) => {
      console.log(response), (this.authors = response);
    });
  }

  activeForm(): void {
    this.flagForm = true;
    this.flagButton = true;
  }

  onCheckboxChange(event: any) {
    const id = Number(event.target.value);
    if (event.target.checked) {
      // Si está seleccionado, agregar el ID al array
      this.selectedAuthors.push(id);
    } else {
      // Si no está seleccionado, quitar el ID del array
      const index = this.selectedAuthors.indexOf(id);
      if (index >= 0) {
        this.selectedAuthors.splice(index, 1);
      }
    }
  }

  post(): void {
    try {
      for (let i = 0; i < this.selectedAuthors.length; i++) {
        const writings: iWritings = {
          id_author: this.selectedAuthors[i],
          id_book: this.id_book,
        };

        this._POSTwritings.postWritings(writings).subscribe(
          (response) => {
            console.log('Escrito guardado con éxito:', response);
          },
          (error) => {
            console.error('Error al guardar el escrito:', error);
          }
        );
      }

      Swal.fire({
        icon: 'success',
        title: 'Good',
        text: 'Datos guardados',
        showConfirmButton: false,
        timer: 1500,
      });

    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error!',
        showConfirmButton: false,
        timer: 1500,
      });
      return console.log(`Error has occurred: ${err}`);
    }
    
  }

}
