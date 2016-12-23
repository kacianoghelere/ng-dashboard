import { Component, Input } from '@angular/core';

import { LayoutControlService } from '../layout-control.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input('brand') brand:string = "";
  sidebarIcon: string = "chevron-left";

  constructor(private layoutControl: LayoutControlService) {  }

  toggleOptions() {
    this.layoutControl.toggleOptions();
  }

  toggleSidebar() {
    this.layoutControl.toggleSidebar();
  }

  get inverseColors(): boolean {
    return this.layoutControl.inverseColors;
  }
}
