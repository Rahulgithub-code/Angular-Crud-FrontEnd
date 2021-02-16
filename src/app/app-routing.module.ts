import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpCreateComponent } from './emp-create/emp-create.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpUpdateComponent } from './emp-update/emp-update.component';

const routes: Routes = [
  { path: 'employees', component: EmpListComponent },
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'add-employee' , component: EmpCreateComponent},
  { path: 'update-employee/:id' , component: EmpUpdateComponent},
  { path: 'update-details/:id' , component: EmpDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
