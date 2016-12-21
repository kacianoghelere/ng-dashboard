import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngDashboard!';
  expandedSidebar: boolean = true;
  expandedOptions: boolean = false;

  toggleSidebar(event) {
    console.log("Sidebar Toggled!", event);
    this.expandedSidebar = event;
  }

  toggleOptions(event) {
    console.log("Options Toggled!", event);
    this.expandedOptions = event;
  }
}
