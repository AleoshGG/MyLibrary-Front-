import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { EditDataPageComponent } from './edit-data-page/edit-data-page.component';

const routes: Routes = [
  { path: '', component: RegistrationPageComponent },
  { path: 'edit', component: EditDataPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
