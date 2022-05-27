
import { Component, VERSION, Input } from '@angular/core';

class posti {
  postiDisponibili: Array<string>;
  nomi: Array<string>
  constructor(postiDisponibili: Array<any>,nomi: Array<string>) {
    let posti= []; 
    let nomiPosti=[];
    postiDisponibili.map((fila, i) => {
        fila.map((nome, j) => {  
          const posto="P"+(j+1)+(i+1);
           posti.push(posto);  
           nomiPosti.push(nome);
      });
      
    });
    this.postiDisponibili= posti;
    this.nomi= nomiPosti;
  }
}
@Component({
  selector: 'app-posti',
  templateUrl: './posti.component.html',
  styleUrls: ['./posti.component.css']
})
export class PostiComponent  {
  platea: posti;
  palchi: posti;
  color: "";
  
  @Input() dati:string[];
  nominativo: string;
  chiave: string;
  constructor() {
    

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
    let nomiPlatea=[];
    let nomiPalchi=[];
    
        this.platea= new posti(teatro.platea, nomiPlatea);
        this.palchi= new posti(teatro.palchi, nomiPalchi);
        
      }
        imposta(posto: string){   
      console.log("Prenotato a " + this.dati[1] +" il posto " + posto);
      console.log(this.dati[0])
       
        }
           

}
