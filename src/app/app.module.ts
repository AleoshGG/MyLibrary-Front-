import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { FormBooksComponent } from './books/form-books/form-books.component';
import { CardBookComponent } from './books/card-book/card-book.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormAuthorComponent } from './authors/form-author/form-author.component';
import { EditFormComponent } from './edit/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    FooterComponent,
    FormBooksComponent,
    CardBookComponent,
    ButtonsComponent,
    FormAuthorComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
