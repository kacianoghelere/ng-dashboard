import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { DropdownModule, DropdownConfig } from 'ng2-bootstrap';

import { UtilModule } from '../util/util.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SettingsComponent } from './settings/settings.component';
import { OptionsPanelComponent } from './options-panel/options-panel.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { NavigationComponent } from './sidebar/navigation/navigation.component';
import { LayoutControlService } from './layout-control.service';
import { NavigationService } from './navigation.service';
import { SidebarNavigationComponent } from './sidebar/sidebar-navigation/sidebar-navigation.component';
import { SidebarFavoritesComponent } from './sidebar/sidebar-favorites/sidebar-favorites.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    UtilModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    SettingsComponent,
    OptionsPanelComponent,
    ProfileComponent,
    MessagesComponent,
    NavigationComponent,
    SidebarNavigationComponent,
    SidebarFavoritesComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    SettingsComponent,
    OptionsPanelComponent,
    ProfileComponent,
    MessagesComponent,
    NavigationComponent,
    SidebarNavigationComponent,
    SidebarFavoritesComponent
  ],
  providers: [DropdownConfig, LayoutControlService, NavigationService]
})
export class LayoutModule { }
