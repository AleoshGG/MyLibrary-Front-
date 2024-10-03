import { Component, OnInit } from '@angular/core';
import { InfoService } from '../service/info.service';
import { iJoinBL } from '../models/iJoinBL';
import { iJoinAW } from '../models/iJoinAW';
import { NationalitiesService } from '../service/nationalities.service';
import { LiteraryGenresService } from '../service/literary-genres.service';
import { iNationality } from '../../authors/models/iNationality';
import { iLiteraryGenre } from '../../books/models/iLiteraryGenre';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { iBook } from '../models/iBook';
import { iAuthor } from '../models/iAuthor';

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

  booksResponse: iJoinBL[] = [];
  authorsResponse: iJoinAW[] = [];

  nationalities: iNationality[] = [];
  genres: iLiteraryGenre[] = [];

  flagForm: boolean = false;

  constructor(
    private _Info: InfoService,
    private _service: NationalitiesService,
    private _serviceJ: LiteraryGenresService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._Info.getInfo(this.id_book).subscribe((response) => {
      console.log(response);
      this.authorsResponse = response;
      this.author = this.authorsResponse[0];
      this.author.birthdate = this.convertDateToInputFormat(
        this.author.birthdate
      );
    });

    this._Info.searchBook(this.id_book).subscribe((response) => {
      console.log(response);
      this.booksResponse = response;
      this.book = this.booksResponse[0];
      this.book.date_publication = this.convertDateToInputFormat(
        this.book.date_publication
      );
    });

    this._service.getNationalities().subscribe((response) => {
      console.log(response), (this.nationalities = response);
    });

    this._serviceJ
      .getGenres()
      .subscribe((respose) => (console.log(respose), (this.genres = respose)));
  }

  convertDateToInputFormat(dateString: string): string {
    return dateString.split('T')[0];
  }

  activeForm() {
    this.flagForm = true;
  }

  deleteBook() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this._Info.deleteBook(this.book.id_book).subscribe((response) => {
            if (response.ok) {
              swalWithBootstrapButtons.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });
            } else {
              console.log(response);
            }
            this.router.navigate(['/']);
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: 'Cancelled',
            text: 'Your imaginary file is safe :)',
            icon: 'error',
          });
        }
      });
  }

  updateData() {
    const book: iBook = {
      title: this.book.title,
      date_publication: this.book.date_publication,
      amount: this.book.amount,
      editorial: this.book.editorial,
      id_literary_genre: this.book.id_literary_genre,
    };

    const author: iAuthor = {
      first_name: this.author.first_name,
      last_name: this.author.last_name,
      birthdate: this.author.birthdate,
      nationality: this.author.nationality,
      place_birth: this.author.place_birth,
    };

    try {
      this._Info.updateBook(this.book.id_book, book).subscribe((response) => {
        console.log(response);
        if (response.msg == "Resourse created successfully") {
          this._Info
            .updateAuthor(this.author.id_author, author)
            .subscribe((response) => {
              console.log(response);
              if (response.msg == "Resourse created successfully") {
                Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: 'Saved',
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
        }
      });
    } catch (err) {
      return console.log(`Error has occuerred ${err}`);
    }
  }
}
