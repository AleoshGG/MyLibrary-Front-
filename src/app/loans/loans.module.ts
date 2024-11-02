import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLoansComponent } from './view-loans/view-loans.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { SearchesComponent } from './searches/searches.component';
import { FormsModule } from '@angular/forms';
import { DetailsSearchComponent } from './details-search/details-search.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ExpiredLoansComponent } from './expired-loans/expired-loans.component';

@NgModule({
  declarations: [ViewLoansComponent, NewLoanComponent, SearchesComponent, DetailsSearchComponent, DeliveryComponent, ExpiredLoansComponent],
  imports: [CommonModule, FormsModule],
  exports: [ViewLoansComponent],

})
export class LoansModule {}
