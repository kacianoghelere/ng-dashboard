import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { ExampleModule } from './example/example.module';

import { routing } from './app.routing';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    UtilModule,
    UserModule,
    MainModule,
    ExampleModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }