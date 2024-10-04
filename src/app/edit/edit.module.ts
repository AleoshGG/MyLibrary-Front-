import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ButtonsComponent } from '../edit/buttons/buttons.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [EditFormComponent, ButtonsComponent],
  imports: [CommonModule, FormsModule],
  exports: [EditFormComponent],
})
export class EditModule {}
