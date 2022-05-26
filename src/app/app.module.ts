import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { colorDirective } from './color.directive';
import { NominativoComponent } from './nominativo/nominativo.component';
import { PostiComponent } from './posti/posti.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
    colorDirective, NominativoComponent, PostiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
