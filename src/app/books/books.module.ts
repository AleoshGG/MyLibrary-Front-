import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBooksComponent } from './form-books/form-books.component';
import { CardBookComponent } from './card-book/card-book.component';
import { FormsModule } from '@angular/forms';
import { ButtonsComponent } from './buttons/buttons.component';
import { MsgInfoComponent } from '../msg-info/msg-info.component';

@NgModule({
  declarations: [FormBooksComponent, CardBookComponent, ButtonsComponent],
  imports: [CommonModule, FormsModule, MsgInfoComponent],
  exports: [FormBooksComponent, CardBookComponent],
})
export class BooksModule {}
