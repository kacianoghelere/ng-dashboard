import { Component } from '@angular/core';

import { LayoutControlService } from '../layout-control.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  altoContraste: boolean = false;
  inverterCores: boolean = false;
  menuLateral: boolean = true;

  constructor(private layoutControl: LayoutControlService) {
    this.layoutControl.sidebarChange.subscribe((flag) => {
      this.menuLateral = flag;
    })
  }

  toggleAltoContraste() {
    this.altoContraste = !this.altoContraste;
  }

  toggleInverterCores() {
    this.inverterCores = !this.inverterCores;
  }

  toggleMenuLateral() {
    this.menuLateral = !this.menuLateral;
  }
}
