import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';

import { routing } from './app.routing';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent, NavbarComponent, SidebarComponent, MainContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }