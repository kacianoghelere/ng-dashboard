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
  private _navItems: NavigationItem[];

  constructor() {
    this.selected = 0;
    this._navItems = [];
  }

  ngOnInit() {
    this._navItems.push(new NavigationItem(0, "", true, ""));
    for (let i = 1; i < 10; i++) {
      this._navItems.push(new NavigationItem(i, `Teste ${i}`, (i > 8), "example/full-template", 15));
    }
    this._navItems.push(new NavigationItem(11, `Grid`, true, "example/grid", 0));
    this._navItems.push(new NavigationItem(12, `Buttons`, true, "example/buttons", 0));
    this._navItems.push(new NavigationItem(13, `Tables`, true, "example/table", 0));
    this._navItems.push(new NavigationItem(14, `Color Scheme`, true, "example/color-scheme", 0));
    this._navItems.push(new NavigationItem(15, `Sub-menu`, true, "", 0));
    console.log(this.tree(this._navItems));
  }

  selectTab(index) {
    this.selected = index;
  }

  isSelectedTab(index) {
    return this.selected === index;
  }

  random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  toggleFavorite(item: NavigationItem) {
    item.toggleFavorite();
  }

  tree(items: NavigationItem[]): NavigationItem {
    let idToNodeMap = {}, root = null, parentNode;
    items.sort((a: NavigationItem, b: NavigationItem) => {
      return a.parent - b.parent;
    });
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

  get favorites(): NavigationItem[] {
    return this.navigation.filter((item) => { return item.favorite; });
  }

  get navigation(): NavigationItem[] {
    return this._navItems.filter((item) => {
      let _description = item.description.toLowerCase();
      let _search = this.search.toLowerCase().trim();
      return _search === "" || _description.includes(_search);
    });
  }
}
