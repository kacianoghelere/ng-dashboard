import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  altoContraste: boolean = false;
  inverterCores: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleAltoContraste() {
    this.altoContraste = !this.altoContraste;
  }

  toggleInverterCores() {
    this.inverterCores = !this.inverterCores;
  }
}
