import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBooksComponent } from './form-books/form-books.component';
import { CardBookComponent } from './card-book/card-book.component';

@NgModule({
  declarations: [
    FormBooksComponent,
    CardBookComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormBooksComponent,
    CardBookComponent
  ]
})

export class BooksModule { }
