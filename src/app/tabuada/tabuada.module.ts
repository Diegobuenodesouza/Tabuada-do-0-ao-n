import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabuadaComponent } from './tabuada/tabuada.component';



@NgModule({
  declarations: [TabuadaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TabuadaComponent
  ]
})
export class TabuadaModule { }
