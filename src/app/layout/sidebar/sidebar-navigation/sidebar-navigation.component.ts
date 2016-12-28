import { Component, OnInit, Input } from '@angular/core';

import { NavigationNode } from '../navigation-node';
import { NavigationService } from '../../navigation.service';

@Component({
  selector: 'sidebar-navigation',
  templateUrl: './sidebar-navigation.component.html',
  styleUrls: ['./sidebar-navigation.component.scss']
})
export class SidebarNavigationComponent implements OnInit {

  navigation: NavigationNode[];
  @Input('search') search: string;

  constructor(private service: NavigationService) { }

  ngOnInit() {
    let filter = this.filter();
    console.log("navigation =>", filter);
    this.navigation = this.service.buildTree(filter).children;
  }

  private filter(): NavigationNode[] {
    return this.service.items.filter(
      (item) => {
        let _description = item.description.toLowerCase();
        let _search = this.service.search.toLowerCase().trim();
        return _search === "" || _description.includes(_search);
      }
    );
  }
}
