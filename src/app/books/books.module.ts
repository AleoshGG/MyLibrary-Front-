import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBooksComponent } from './form-books/form-books.component';

@NgModule({
  declarations: [
    FormBooksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormBooksComponent
  ]
})

export class BooksModule { }
