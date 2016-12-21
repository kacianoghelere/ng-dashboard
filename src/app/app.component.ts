import { Component } from '@angular/core';

import { LayoutControlService } from './layout/layout-control.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngDashboard!';

  constructor(private layoutControl: LayoutControlService) { }

  get expandedOptions(): boolean {
    return this.layoutControl.options;
  }

  get expandedSidebar(): boolean {
    return this.layoutControl.sidebar;
  }
}
