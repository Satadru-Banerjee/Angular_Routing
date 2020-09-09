import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent{
  Cspan : number = 2;
  category: string = 'Department'
  showDetails: boolean = false;
  togCategory(): void{
    if(this.category=='Department')
    this.category='Employee'
    else
    this.category='Department'
  }
  togDetails(): void {
    this.showDetails = !this.showDetails;
  }
  
}
