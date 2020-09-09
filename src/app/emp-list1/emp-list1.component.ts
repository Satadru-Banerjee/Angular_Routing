import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list1',
  templateUrl: './emp-list1.component.html',
  styleUrls: ['./emp-list1.component.css']
})
export class EmpList1Component implements OnInit {

  employees : any[] = [
    {Empid: 'EM101', name: 'John Smith', gender: 'Male', designation: 'Employee', salary: '10000'},
    {Empid: 'EM102', name: 'Jane Doe', gender: 'Female', designation: 'Senior Employee', salary: '40000'},
    {Empid: 'EM104', name: 'John Surtees', gender: 'Male', designation: 'Employee', salary: '10000'},
    {Empid: 'EM105', name: 'Jim Halpert', gender: 'Male', designation: 'Senior Associate', salary: '30000'},
    {Empid: 'EM106', name: 'Dwight K Schrut', gender: 'Male', designation: 'Employee', salary: '20000'},
    {Empid: 'EM107', name: 'Hermoinie Granger', gender: 'Female', designation: 'Senior Researcher', salary: '30000'},
    {Empid: 'MN101', name: 'Lucius Malfoy', gender: 'Male', designation: 'Sales Manager', salary: '50000'},
    {Empid: 'MN102', name: 'Michael Scott', gender: 'Male', designation: 'Regional Manager', salary: '70000'},
    {Empid: 'DI101', name: 'Maragaret Thatcher', gender: 'Female', designation: 'Director', salary: '200000'},
  ]
  showDetails: boolean=false;
  togDetails(): void {
    this.showDetails = !this.showDetails;
  }

  ngOnInit() {
  }
}
