import { Component, VERSION } from '@angular/core';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  platea: Array<any>;
  
  constructor(){

    const nfilePlatea = 7;
    const npostiPlatea = 10;

    this.platea= Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("x"));
    




  }


}
