import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { DeptListComponent } from './dept-list/dept-list.component';
//import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpList1Component } from './emp-list1/emp-list1.component';
import { DeptList1Component } from './dept-list1/dept-list1.component';

const routes: Routes = [
  { path: '', component: DeptList1Component },
  { path: 'dept', component: DeptList1Component },
  { path: 'emp', component: EmpList1Component },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = { DeptList1Component, EmpList1Component };