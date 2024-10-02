import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthorComponent } from './form-author/form-author.component';



@NgModule({
  declarations: [
    FormAuthorComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    FormAuthorComponent
  ]
})
export class AuthorsModule { }
