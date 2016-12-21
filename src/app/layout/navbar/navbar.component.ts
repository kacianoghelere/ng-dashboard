import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input('brand') brand:string = "";
  @Input('expanded-sidebar') expandedSidebar:boolean = true;
  @Input('expanded-options') expandedSettings:boolean = false;
  @Output('sidebarChange') toggleSidebar:EventEmitter<boolean>;
  @Output('optionsChange') toggleOptions:EventEmitter<boolean>;
  sidebarIcon: string = "chevron-left";

  constructor() {
    this.toggleSidebar = new EventEmitter();
    this.toggleOptions = new EventEmitter();
  }

  toggleSidebarExpand() {
    console.log("Toggled!", this.expandedSidebar);
    this.expandedSidebar = !this.expandedSidebar;
    this.sidebarIcon = this.expandedSidebar ? "chevron-left" : "chevron-right";
    this.toggleSidebar.emit(this.expandedSidebar);
  }

  toggleOptionsExpand() {
    console.log("Toggled!", this.expandedSettings);
    this.expandedSettings = !this.expandedSettings;
    this.toggleOptions.emit(this.expandedSettings);
  }
}
