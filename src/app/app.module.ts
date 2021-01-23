import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TabuadaModule} from './tabuada/tabuada.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabuadaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
