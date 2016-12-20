import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';
import { GridComponent } from './example/grid/grid.component';
import { TableComponent } from './example/table/table.component';
import { ButtonsComponent } from './example/buttons/buttons.component';
import { FullTemplateComponent } from './example/full-template/full-template.component';

const APP_ROUTES: Routes  = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'example/grid',
    component: GridComponent
  },
  {
    path: 'example/table',
    component: TableComponent
  },
  {
    path: 'example/buttons',
    component: ButtonsComponent
  },
  {
    path: 'example/full-template',
    component: FullTemplateComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
