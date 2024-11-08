import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAuthorComponent } from './form-author/form-author.component';
import { ButtonsComponent } from '../authors/buttons/buttons.component';
import { FormsModule } from '@angular/forms';
import { MsgInfoComponent } from '../msg-info/msg-info.component';

@NgModule({
  declarations: [FormAuthorComponent, ButtonsComponent],
  imports: [CommonModule, FormsModule, MsgInfoComponent],
  exports: [FormAuthorComponent],
})
export class AuthorsModule {}
