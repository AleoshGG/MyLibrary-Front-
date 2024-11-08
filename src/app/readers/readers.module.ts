import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardReadersComponent } from './dashboard-readers/dashboard-readers.component';
import { FormReaderComponent } from './form-reader/form-reader.component';
import { FormsModule } from '@angular/forms';
import { SearcherComponent } from './searcher/searcher.component';
import { DetailsReaderComponent } from './details-reader/details-reader.component';
import { MsgInfoComponent } from '../msg-info/msg-info.component';


@NgModule({
  declarations: [
    DashboardReadersComponent,
    FormReaderComponent,
    SearcherComponent,
    DetailsReaderComponent,
  ],
  imports: [CommonModule, FormsModule, MsgInfoComponent],
  exports: [
    DashboardReadersComponent
  ]
})
export class ReadersModule {}
