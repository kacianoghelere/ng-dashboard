import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { NavigationNode } from './navigation-node';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  items: NavigationNode[] = [];
  favoritos: NavigationNode[] = [];
  selected: number = 0;
  search: string = "";
  favoritesTree: NavigationNode[];
  navigationTree: NavigationNode[];

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.items = this.navigationService.items;
    this.buildTrees();
  }

  ngOnChanges() {
    console.log("Algo mudou!");
  }

  favorites(): NavigationNode[] {
    return this.navigation().filter(
      (item) => { return item.favorite || item.routePath === ""; }
    );
  }

  navigation(): NavigationNode[] {
    return this.items.filter(
      (item) => {
        let _description = item.description.toLowerCase();
        let _search = this.search.toLowerCase().trim();
        return _search === "" || _description.includes(_search);
      }
    );
  }

  isSelectedTab(index) {
    return this.selected === index;
  }

  selectTab(index) {
    this.selected = index;
  }

  buildTrees() {
    let favorites = this.favorites();
    this.favoritesTree = this.tree(favorites);

    let navigation = this.navigation();
    this.navigationTree = this.tree(navigation);
  }

  tree(items: NavigationNode[]): NavigationNode[] {
    let root = this.navigationService.buildTree(items);
    console.log(root);
    return root ? root.children : [];
  }
}
