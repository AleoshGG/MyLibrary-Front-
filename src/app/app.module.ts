import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { TitleComponent } from './title/title.component';
import { FooterComponent } from './footer/footer.component';
import { BooksModule } from "./books/books.module";
import { ButtonsComponent } from './buttons/buttons.component';
import { AuthorsModule } from "./authors/authors.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    TitleComponent,
    FooterComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    AuthorsModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
