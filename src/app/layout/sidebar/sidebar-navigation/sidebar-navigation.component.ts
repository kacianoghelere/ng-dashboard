import { Component, OnInit, Input } from '@angular/core';

import { NavigationNode } from '../navigation-node';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent implements OnInit {

  navigation: NavigationNode[];

  constructor(private service: NavigationService) { }

  ngOnInit() {
    this.initialize();
    this.service.emitter.subscribe((item) => this.initialize());
  }

  evento(event: any = {}) {
    console.log("navigation initialized =>", event);
  }

  initialize(event: any = {}) {
    let filter = this.filter();
    console.log("navigation initialized =>", event);
    this.navigation = this.service.buildTree(filter).children;
  }

  private filter(): NavigationNode[] {
    return this.service.items;
  }
}
