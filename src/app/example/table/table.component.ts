import { Component } from '@angular/core';

@Component({
  selector: 'example-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
 
  constructor() { }

  range(count: number) {
    return new Array(count);
  }
}
