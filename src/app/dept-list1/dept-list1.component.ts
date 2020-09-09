import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list1.component.html',
  styleUrls: ['./dept-list1.component.css']
})
export class DeptList1Component implements OnInit {

  departments : any[] = [
    {Did: 'DE01', name: 'Software Development'},
    {Did: 'DE02', name: 'Human Resources'},
    {Did: 'DE03', name: 'Sales and Marketing'},
    {Did: 'DE04', name: 'Customer Support'},
  ]

  constructor() { }
  ngOnInit() {
  }

}
