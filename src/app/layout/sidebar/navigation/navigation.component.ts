import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { NavigationNode } from '../navigation-node';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  private _items: NavigationNode[];
  @Output('menuChange') emitter: EventEmitter<any>;

  constructor() {
    this.emitter = new EventEmitter();
  }

  ngOnInit() { }

  identify(index, item){
    return item.id;
  }

  isMenu(item: NavigationNode): boolean {
    return (item.routePath === "");
  }

  toggleExpanded(item: NavigationNode) {
    console.log(item);
    item.expanded = !item.expanded;
    // this.emitter.emit({item: item.id});
  }

  toggleFavorite(item: NavigationNode) {
    item.favorite = !item.favorite;
    this.emitter.emit({item: item.id});
  }

  get items(): NavigationNode[] {
    return this._items;
  }

  @Input('items')
  set items(items: NavigationNode[]) {
    this._items = items || [];
  }
}
