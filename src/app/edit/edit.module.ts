import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditFormComponent } from './edit-form/edit-form.component';
import { ButtonsComponent } from '../edit/buttons/buttons.component';

@NgModule({
  declarations: [EditFormComponent, ButtonsComponent],
  imports: [CommonModule],
  exports: [EditFormComponent],
})
export class EditModule {}
