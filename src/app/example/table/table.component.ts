import { Component } from '@angular/core';

@Component({
  selector: 'example-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  dados: any[] = [
    {classe: "active", dados: ["Teste 1.1", "Teste 1.2", "Teste 1.3", "Teste 1.4", "Teste 1.5", "Teste 1.6"]},
    {classe: "info", dados: ["Teste 2.1", "Teste 2.2", "Teste 2.3", "Teste 2.4", "Teste 2.5", "Teste 2.6"]},
    {classe: "success", dados: ["Teste 3.1", "Teste 3.2", "Teste 3.3", "Teste 3.4", "Teste 3.5", "Teste 3.6"]},
    {classe: "warning", dados: ["Teste 4.1", "Teste 4.2", "Teste 4.3", "Teste 4.4", "Teste 4.5", "Teste 4.6"]},
    {classe: "danger", dados: ["Teste 5.1", "Teste 5.2", "Teste 5.3", "Teste 5.4", "Teste 5.5", "Teste 5.6"]}
  ];

  constructor() { }

  range(count: number) {
    return new Array(count);
  }
}
