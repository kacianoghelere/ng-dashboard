import { Component, OnInit, Input } from '@angular/core';

import { NavigationNode } from './navigation-node';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: NavigationNode[] = [];
  favoritos: NavigationNode[] = [];
  selected: number = 0;
  search: string = "";

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.items = this.navigationService.items;
  }

  copy(items): NavigationNode[] {
    return <NavigationNode[]> JSON.parse(JSON.stringify(items));
  }

  get favorites(): NavigationNode[] {
    let favorites: any[] = [];
    let items = this.copy(this.navigation);
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      if (item.favorite || item.routePath === "") {
        favorites.push(item);
      }
    }
    return favorites;
  }

  get navigation(): any[] {
    return this.items.filter((item) => {
      let _description = item.description.toLowerCase();
      let _search = this.search.toLowerCase().trim();
      return _search === "" || _description.includes(_search);
    });
  }

  isSelectedTab(index) {
    return this.selected === index;
  }

  selectTab(index) {
    this.selected = index;
  }

  favoritesTree(): NavigationNode[] {
    let favorites = this.favorites;
    // console.log("Favorites =>", favorites.length);
    // console.log(favorites);
    return this.tree(favorites);
  }

  navigationTree(): NavigationNode[] {
    let navigation = this.navigation;
    // console.log("Navigation =>", navigation.length);
    // console.log(navigation);
    return this.tree(navigation);
  }

  tree(items: NavigationNode[]): NavigationNode[] {
    let root = this.navigationService.buildTree(items);
    return root ? root.children : [];
  }
}
