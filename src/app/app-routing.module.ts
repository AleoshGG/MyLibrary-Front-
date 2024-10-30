import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { EditDataPageComponent } from './edit-data-page/edit-data-page.component';
import { DashboardReadersComponent } from './readers/dashboard-readers/dashboard-readers.component';

const routes: Routes = [
  { path: '', component: RegistrationPageComponent },
  { path: 'edit', component: EditDataPageComponent },
  { path: 'readers', component: DashboardReadersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
