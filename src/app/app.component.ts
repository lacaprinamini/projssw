import { Component, VERSION } from '@angular/core';

class posti {
  postiOrdinati: Map<any, any>;
  postiPlatea: number;
  postiPalchi: number;
  constructor(postiOrdinati: Map<any, any>, file: number, posti: number) {
    let postiDisponibili = Array(file)
      .fill('')
      .map(() => Array(posti).fill('x'));
    let map = new Map();
    postiDisponibili.map((fila, i) => {
      fila.map((nome, j) => {
        map.set('P' + (j + 1) + (i + 1), nome);
      });
    });
    this.postiOrdinati = map;
  }
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  platea: posti;
  palchi: posti;
  postiPlatea: Array<string>;
  postiPalchi: Array<string>;
  color: '';

  constructor() {
    const n = {
      filePlatea: 7,
      postiPlatea: 10,
      filePalchi: 4,
      postiPalchi: 6,
    };
    const teatro = {
      platea: new Map(),
      palchi: new Map(),
    };

    let postoPlatea = [];
    this.platea = new posti(teatro.platea, n.filePlatea, n.postiPlatea);
    for (let key of this.platea.postiOrdinati.keys()) {
      postoPlatea.push(key);
    }
    this.postiPlatea = postoPlatea;

    let postoPalchi = [];
    this.palchi = new posti(teatro.palchi, n.filePalchi, n.postiPalchi);
    for (let key of this.palchi.postiOrdinati.keys()) {
      postoPalchi.push(key);
    }
    this.postiPalchi = postoPalchi;
    for (let key of this.palchi.postiOrdinati.keys()) { 
      console.log(key + " => " + this.palchi.postiOrdinati.get(key) ) 
    } 
  }

  
  imposta(key: string, posti:Array<string>) {
   if(posti.length>this.postiPalchi.length){
   console.log(this.platea.postiOrdinati.set(key, 'eeuu'))
   }
   else{
    console.log(this.palchi.postiOrdinati.set(key, 'eeuu'))
    for (let key of this.palchi.postiOrdinati.keys()) { 
    } 
   }
    
    
    
  }
}