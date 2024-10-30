import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardReadersComponent } from './dashboard-readers/dashboard-readers.component';
import { FormReaderComponent } from './form-reader/form-reader.component';
import { FormsModule } from '@angular/forms';
import { SearcherComponent } from './searcher/searcher.component';


@NgModule({
  declarations: [
    DashboardReadersComponent,
    FormReaderComponent,
    SearcherComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    DashboardReadersComponent
  ]
})
export class ReadersModule {}
