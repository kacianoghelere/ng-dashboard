import { Component, OnInit, Input } from '@angular/core';

import { NavigationNode } from '../navigation-node';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'sidebar-favorites',
  templateUrl: './sidebar-favorites.component.html',
  styleUrls: ['./sidebar-favorites.component.scss']
})
export class SidebarFavoritesComponent implements OnInit {

  favorites: NavigationNode[];

  constructor(private service: NavigationService) { }

  ngOnInit() {
    this.initialize();
    this.service.emitter.subscribe((item) => this.initialize());
  }

  evento(event: any = {}) {
    console.log("favorites initialized =>", event);
  }

  initialize(event: any = {}) {
    let filter = this.filter();
    console.log("favorites initialized =>", event);
    this.favorites = this.service.copy(filter);
    // this.favorites.sort(
    //   (a: NavigationNode, b: NavigationNode) => {
    //     return a.id - b.id;
    //   }
    // );
  }

  private filter(): NavigationNode[] {
    return this.service.items.filter(
      (item) => { return item.favorite && item.routePath !== ""; }
    );
  }
}
