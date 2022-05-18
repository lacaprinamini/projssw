import { Component, VERSION } from '@angular/core';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  platea: Array<string>;
  
  constructor(){

    const nfilePlatea = 7;
    const npostiPlatea = 10;
    const array=[];
    this.platea= array;
    
    const plateaPosti= Array(nfilePlatea).fill("").map(() => Array(npostiPlatea).fill("x"));

   plateaPosti.map((fila, i) => {
      var p = fila.map((nome, j) => {
          
          const posto="P"+(j+1)+(i+1);
           array.push(posto);
           
      });
     
    });
    
  }
  
}
