
import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  chiave: string;
  constructor(){}
 
  onEnter(value: string) { 
    this.chiave = value; 
  }
  }