import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  regularPay:number=0;
  overTime:number=0;
  totalPay:number=0;
  taxOnPay:number=0;
  hourlyrate:number=0;
  noofhrsworked:number=0;
  calculatePay(){
     
    this.noofhrsworked > 40 ? this.overTime = ((this.noofhrsworked - 40)*this.hourlyrate*1.5) : this.overTime = 0;

    this.totalPay = this.overTime + this.noofhrsworked * this.hourlyrate;
    this.regularPay = this.noofhrsworked * this.hourlyrate;
    if(this.totalPay){
      this.taxOnPay =this.totalPay * 0.18;
    }   

  }

  constructor() {}

}
