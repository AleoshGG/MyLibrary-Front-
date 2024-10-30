import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardReadersComponent } from './dashboard-readers/dashboard-readers.component';
import { FormReaderComponent } from './form-reader/form-reader.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardReadersComponent,
    FormReaderComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DashboardReadersComponent
  ]
})
export class ReadersModule {}
