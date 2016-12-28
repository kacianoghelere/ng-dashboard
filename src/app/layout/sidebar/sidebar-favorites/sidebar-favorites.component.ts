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
  @Input('search') search: string;

  constructor(private service: NavigationService) { }

  ngOnInit() {
    let filter = this.filter();
    console.log("favorites =>", filter);
    this.favorites = this.service.buildTree(filter).children;
  }

  private filter(): NavigationNode[] {
    return this.service.items.filter(
      (item) => {
        let _description = item.description.toLowerCase();
        let _search = this.service.search.toLowerCase().trim();
        return _search === "" || _description.includes(_search);
      }
    ).filter(
      (item) => { return item.favorite || item.routePath === ""; }
    );
  }
}
