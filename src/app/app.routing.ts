import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';

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
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);