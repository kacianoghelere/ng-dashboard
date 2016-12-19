import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input('brand') brand: string = "";
  @Input('expanded-sidebar') expanded: boolean = true;
  @Output('toggle') toggleSidebar: EventEmitter<boolean>;
  sidebarIcon: string = "chevron-left";

  constructor() {
    this.toggleSidebar = new EventEmitter();
  }

  toggleExpand() {
    console.log("Toggled!", this.expanded);
    this.expanded = !this.expanded;
    this.sidebarIcon = this.expanded ? "chevron-left" : "chevron-right";
    this.toggleSidebar.emit(this.expanded);
  }
}
 