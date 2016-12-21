import { Component } from '@angular/core';

@Component({
  selector: 'app-options-panel',
  templateUrl: './options-panel.component.html',
  styleUrls: ['./options-panel.component.scss']
})
export class OptionsPanelComponent  {

  selected: number = 0;

  constructor() { }

  selectTab(index) {
    this.selected = index;
  }

  isSelectedTab(index) {
    return this.selected === index;
  }
}
