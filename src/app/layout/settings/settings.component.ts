import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  altoContraste: boolean = false;
  inverterCores: boolean = false;

  constructor() { }

  toggleAltoContraste() {
    this.altoContraste = !this.altoContraste;
  }

  toggleInverterCores() {
    this.inverterCores = !this.inverterCores;
  }
}
