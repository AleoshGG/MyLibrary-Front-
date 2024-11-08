import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { EditDataPageComponent } from './edit-data-page/edit-data-page.component';
import { DashboardReadersComponent } from './readers/dashboard-readers/dashboard-readers.component';
import { ViewLoansComponent } from './loans/view-loans/view-loans.component';


const routes: Routes = [
  { path: '', component: RegistrationPageComponent },
  { path: 'edit', component: EditDataPageComponent },
  { path: 'readers', component: DashboardReadersComponent },
  { path: 'loans', component: ViewLoansComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
