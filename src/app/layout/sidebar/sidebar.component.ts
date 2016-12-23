import { Component, OnInit, Input } from '@angular/core';

import { NavigationItem } from './navigation-item';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  selected: number;
  search: string = "";
  _navItems: NavigationItem[];

  constructor() {
    this.selected = 0;
    this._navItems = [];
  }

  ngOnInit() {
    this._navItems.push(new NavigationItem(1, ``, true, ""));
    for (let i = 1; i < 10; i++) {
      this._navItems.push(new NavigationItem(i, `Teste ${i}`, (i > 8), "example/full-template", 0));
    }
    this._navItems.push(new NavigationItem(11, `Grid`, true, "example/grid", 1));
    this._navItems.push(new NavigationItem(12, `Buttons`, true, "example/buttons", 1));
    this._navItems.push(new NavigationItem(13, `Tables`, true, "example/table", 1));
    this._navItems.push(new NavigationItem(14, `Color Scheme`, true, "example/color-scheme", 1));
    console.log(this.tree(this._navItems));
  }

  selectTab(index) {
    this.selected = index;
  }

  isSelectedTab(index) {
    return this.selected === index;
  }

  toggleFavorite(item: NavigationItem) {
    item.toggleFavorite();
  }

  public get navigation(): NavigationItem[] {
    return this._navItems.filter((item) => {
      let _description = item.description.toLowerCase();
      let _search = this.search.toLowerCase().trim();
      return _search === "" || _description.includes(_search);
    });
  }

  public get favorites(): NavigationItem[] {
    return this.navigation.filter((item) => { return item.favorite; });
  }
  recursive(items) {
    var idToNodeMap = {};
    var root = null;
    for(var i = 0; i < items.length; i++) {
      var datum = items[i];
      datum.children = [];
      idToNodeMap[datum.id] = datum;

      if(typeof datum.parent === "undefined") {
          root = datum;
      } else {
          let parentNode = idToNodeMap[datum.parent];
          parentNode.children.push(datum);
      }
    }
    return root;
  }

  tree(items: NavigationItem[]): NavigationItem {
    items.sort((a, b) => { return a.parent - b.parent; });
    let idToNodeMap = {}, root = null, parentNode;
    items.forEach((datum: NavigationItem) => {
      idToNodeMap[datum.id] = datum;

      if (typeof datum.parent === "undefined" || datum.parent === null) {
        root = datum;
      } else {
        idToNodeMap[datum.parent] = idToNodeMap[datum.parent] || new NavigationItem();
        idToNodeMap[datum.parent].children.push(datum);
      }
    });
    return root;
  }
}
