import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-test',
  template: `<p class="alert alert-danger">Template Test</p>`,
  styleUrls: ['./template-test.component.scss']
})
export class TemplateTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
