import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngDashboard!';
  expanded: boolean = true;

  toggleSidebar(event) {
    console.log("Sidebar Toggled!", event);
    this.expanded = event;
  }
}
