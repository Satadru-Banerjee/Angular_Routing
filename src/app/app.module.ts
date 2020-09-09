import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';

//import { EmpListComponent } from './emp-list/emp-list.component';
//import { DeptListComponent } from './dept-list/dept-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpList1Component } from './emp-list1/emp-list1.component';
import { DeptList1Component } from './dept-list1/dept-list1.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    EmpList1Component,
    DeptList1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
