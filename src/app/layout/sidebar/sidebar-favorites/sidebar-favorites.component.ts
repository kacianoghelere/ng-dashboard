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
  initialize(event: any = {}) {
    let filter = this.filter();
    this.favorites = this.service.copy(filter);
  }

  private filter(): NavigationNode[] {
    return this.service.items.filter(
      (item) => { return item.favorite && item.routePath !== ""; }
    );
  }
}
