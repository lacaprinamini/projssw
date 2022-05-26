import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css']
})
export class NominativoComponent {
  @Input() chiave: string;
  nominativo: string;
  constructor() { }
  onEnter(value: string) { 
    this.nominativo = value; }

}