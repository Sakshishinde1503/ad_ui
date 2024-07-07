import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarGraphComponent } from './bar-graph.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BarGraphComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ BarGraphComponent ]
})
export class BarGraphModule { }
