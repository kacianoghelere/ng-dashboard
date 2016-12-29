import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UserComponent } from './user/user.component';

const appRoutes: Routes  = [
  { path: '',                      component: MainComponent },
  { path: 'main',                  component: MainComponent },
  { path: 'user',                  component: UserComponent },
  { path: 'user/:id',              component: UserComponent },
  { path: '**',                    redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
