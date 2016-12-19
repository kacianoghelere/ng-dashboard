import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DropdownModule, DropdownConfig } from 'ng2-bootstrap';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { ExampleModule } from './example/example.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    routing,
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
  providers: [DropdownConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }