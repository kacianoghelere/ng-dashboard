import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { Bs3Module } from './bs3-components/bs3.module';
import { ExampleModule } from './example/example.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    UtilModule,
    Bs3Module,
    UserModule,
    MainModule,
    ExampleModule,
    LayoutModule,
    AppRoutingModule // Modulo de routing sempre por ultimo, pra evitar tretas
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
