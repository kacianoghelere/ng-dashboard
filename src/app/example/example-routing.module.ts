import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExampleComponent }      from './example/example.component';
import { ButtonsComponent }      from './buttons/buttons.component';
import { ColorSchemeComponent }  from './color-scheme/color-scheme.component';
import { FullTemplateComponent } from './full-template/full-template.component';
import { GridComponent }         from './grid/grid.component';
import { TableComponent }        from './table/table.component';

const exampleRoutes: Routes  = [
  { path: 'example',              component: ExampleComponent },
  { path: 'example/buttons',       component: ButtonsComponent },
  { path: 'example/color-scheme',  component: ColorSchemeComponent },
  { path: 'example/full-template', component: FullTemplateComponent },
  { path: 'example/grid',          component: GridComponent },
  { path: 'example/table',         component: TableComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(exampleRoutes) ],
  exports: [ RouterModule ]
})
export class ExampleRoutingModule { }
