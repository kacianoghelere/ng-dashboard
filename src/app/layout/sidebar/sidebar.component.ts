import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { NavigationNode } from './navigation-node';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnChanges {

  selected: number = 0;

  constructor(private service: NavigationService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("Algo mudou!");
  }

  isSelectedTab(index) {
    return this.selected === index;
  }

  selectTab(index) {
    this.selected = index;
  }

  get search(): string {
    return this.service.search;
  }

  set search(search: string) {
    this.service.search = search;
  }
}
