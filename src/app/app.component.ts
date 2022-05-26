
import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  value = '';
  constructor(){}
 
  onEnter(value: string) { this.value = value; }
}