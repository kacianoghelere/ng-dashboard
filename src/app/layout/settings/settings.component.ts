import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

import { LayoutControlService } from '../layout-control.service';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnDestroy {

  subscription: Subscription;
  altoContraste: boolean = false;
  menuLateral: boolean = true;

  constructor(private layoutControl: LayoutControlService) {
    this.subscription = this.layoutControl.sidebarChange.subscribe((flag) => {
      this.menuLateral = flag;
    })
  }

  toggleAltoContraste() {
    this.altoContraste = !this.altoContraste;
  }

  get inverseColors(): boolean {
    return this.layoutControl.inverseColors;
  }

  toggleInverseColors() {
    this.layoutControl.toggleInverseColors();
  }

  toggleMenuLateral() {
    this.layoutControl.toggleSidebar();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
