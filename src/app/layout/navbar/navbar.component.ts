import { Component, Input } from '@angular/core';

import { LayoutControlService } from '../layout-control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input('brand') brand:string = "";
  expandedSidebar:boolean = true;
  expandedOptions:boolean = false;
  sidebarIcon: string = "chevron-left";

  constructor(private layoutControl: LayoutControlService) {
    this.layoutControl.optionsChange.subscribe((options) => {
      this.expandedOptions = options;
    })
    this.layoutControl.sidebarChange.subscribe((sidebar) => {
      this.expandedSidebar = sidebar;
    });
  }

  toggleOptions() {
    this.layoutControl.toggleOptions();
  }

  toggleSidebar() {
    this.layoutControl.toggleSidebar();
  }
}
