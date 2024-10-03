import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthorComponent } from './form-author/form-author.component';
import { ButtonsComponent } from '../authors/buttons/buttons.component';

@NgModule({
  declarations: [FormAuthorComponent, ButtonsComponent],
  imports: [CommonModule],
  exports: [FormAuthorComponent],
})
export class AuthorsModule {}
