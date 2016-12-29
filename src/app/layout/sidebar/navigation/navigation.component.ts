import { Component, OnInit, Input } from '@angular/core';

import { NavigationNode } from '../navigation-node';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input('items') items: NavigationNode[];

  constructor(private service: NavigationService) { }

  ngOnInit() { }

  isMenu(item: NavigationNode): boolean {
    return (item.routePath === "");
  }

  isValid(items: NavigationNode[]): boolean {
    return items.length > 0;
  }

  toggleExpanded(item: NavigationNode) {
    this.service.toggleExpanded(item.id);
  }

  toggleFavorite(item: NavigationNode) {
    this.service.toggleFavorite(item.id);
  }
}
