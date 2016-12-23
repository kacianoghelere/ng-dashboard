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
    this._navItems.push(new NavigationItem(11, `Grid`, true, "example/grid"));
    this._navItems.push(new NavigationItem(12, `Buttons`, true, "example/buttons"));
    this._navItems.push(new NavigationItem(13, `Tables`, true, "example/table"));
    this._navItems.push(new NavigationItem(14, `Color Scheme`, true, "example/color-scheme"));
    for (let i = 1; i <= 20; i++) {
      this._navItems.push(new NavigationItem(i, `Teste ${i}`, (i > 8), "example/full-template"));
    }
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
}
