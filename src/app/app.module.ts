import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { BooksModule } from "./books/books.module";
import { AuthorsModule } from "./authors/authors.module";
import { HttpClientModule } from '@angular/common/http';
import { EditDataPageComponent } from './edit-data-page/edit-data-page.component';
import { RouterModule } from '@angular/router';
import { EditModule } from "./edit/edit.module";

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    TitleComponent,
    FooterComponent,
    EditDataPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AuthorsModule,
    HttpClientModule,
    RouterModule,
    EditModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
