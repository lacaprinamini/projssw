import { Component, VERSION } from '@angular/core';

class posti {
  postiDisponibili: Array<any>;
  constructor(postiDisponibili: Array<any>) {
    let posti= [];
    postiDisponibili.map((fila, i) => {
        fila.map((nome, j) => {  
          const posto="P"+(j+1)+(i+1);
           posti.push(posto);         
      });
    });
    this.postiDisponibili= posti;
  }
}


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  platea: posti;
  palchi: posti;

  constructor(){

const n = {
filePlatea: 7,
postiPlatea: 10,    
filePalchi: 4,
postiPalchi: 6
}

const teatro = {
  platea: Array(n.filePlatea).fill("").map(() => Array(n.postiPlatea).fill("x")),
  palchi: Array(n.filePalchi).fill("").map(() => Array(n.postiPalchi).fill("x")),
};

    this.platea= new posti(teatro.platea);
    this.palchi= new posti(teatro.palchi);
  }
  
}
