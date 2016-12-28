import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DropdownModule, DropdownConfig } from 'ng2-bootstrap';

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

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    SettingsComponent,
    OptionsPanelComponent,
    ProfileComponent,
    MessagesComponent,
    NavigationComponent
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    MainContentComponent,
    SettingsComponent,
    OptionsPanelComponent,
    ProfileComponent,
    MessagesComponent,
    NavigationComponent
  ],
  providers: [DropdownConfig, LayoutControlService, NavigationService]
})
export class LayoutModule { }
