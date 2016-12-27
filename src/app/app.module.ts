import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DropdownModule, DropdownConfig } from 'ng2-bootstrap';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { MainModule } from './main/main.module';
import { UserModule } from './user/user.module';
import { Bs3Module } from './bs3-components/bs3.module';
import { ExampleModule } from './example/example.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { OptionsPanelComponent } from './layout/options-panel/options-panel.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { MessagesComponent } from './layout/messages/messages.component';
import { LayoutControlService } from './layout/layout-control.service';
import { NavigationService } from './layout/navigation.service';
import { NavigationComponent } from './layout/sidebar/navigation/navigation.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    FormsModule,
    DropdownModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UtilModule,
    Bs3Module,
    UserModule,
    MainModule,
    ExampleModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    SettingsComponent,
    OptionsPanelComponent,
    ProfileComponent,
    MessagesComponent,
    NavigationComponent
  ],
  providers: [DropdownConfig, LayoutControlService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
