import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { TableComponent } from './table/table.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TemplateTestComponent } from './template-test/template-test.component';
import { FullTemplateComponent } from './full-template/full-template.component';
import { ColorSchemeComponent } from './color-scheme/color-scheme.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GridComponent, TableComponent, ButtonsComponent, TemplateTestComponent, FullTemplateComponent, ColorSchemeComponent],
  exports: [GridComponent, TableComponent]
})
export class ExampleModule { }
