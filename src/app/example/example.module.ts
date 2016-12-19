import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridComponent, TableComponent],
  exports: [GridComponent, TableComponent]
})
export class ExampleModule { }
