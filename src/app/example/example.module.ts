import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridComponent }         from './grid/grid.component';
import { TableComponent }        from './table/table.component';
import { ButtonsComponent }      from './buttons/buttons.component';
import { TemplateTestComponent } from './template-test/template-test.component';
import { FullTemplateComponent } from './full-template/full-template.component';
import { ColorSchemeComponent }  from './color-scheme/color-scheme.component';
import { ExampleRoutingModule }  from './example-routing.module';
import { ExampleComponent }      from './example/example.component';

@NgModule({
  imports: [ CommonModule, ExampleRoutingModule ],
  declarations: [
    GridComponent,
    TableComponent,
    ButtonsComponent,
    TemplateTestComponent,
    FullTemplateComponent,
    ColorSchemeComponent,
    ExampleComponent
  ],
  exports: []
})
export class ExampleModule { }
