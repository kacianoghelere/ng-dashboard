import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngDashboard!';
  expandedSidebar: boolean = true;
  expandedSettings: boolean = false;

  toggleSidebar(event) {
    console.log("Sidebar Toggled!", event);
    this.expandedSidebar = event;
  }

  toggleSettings(event) {
    console.log("Settings Toggled!", event);
    this.expandedSettings = event;
  }
}
