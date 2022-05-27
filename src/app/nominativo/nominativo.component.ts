import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css']
})
export class NominativoComponent {
  @Input() chiave: string;
  nominativo: string;
  dati: string[];
  @Output() titleEvent = new EventEmitter<Array<string>>();
  constructor() { }
 
  onEnter(value: string) {
    this.nominativo=value;
    this.dati = [this.chiave, this.nominativo];
    this.titleEvent.emit(this.dati);

  }

}