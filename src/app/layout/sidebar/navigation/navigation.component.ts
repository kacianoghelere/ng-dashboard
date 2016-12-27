import { Component, OnInit, Input } from '@angular/core';

import { NavigationNode } from '../navigation-node';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input('items') items: NavigationNode[];

  constructor() { }

  ngOnInit() { }

  isMenu(index: number): boolean {
    return (this.items[index].routePath === "");
  }

  toggleExpanded(index: number) {
    console.log(this.items[index]);
    this.items[index].expanded = !this.items[index].expanded;
  }

  toggleFavorite(index: number) {
    this.items[index].favorite = !this.items[index].favorite;
  }
}
