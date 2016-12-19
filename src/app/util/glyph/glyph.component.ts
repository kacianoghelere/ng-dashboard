import { Component, Input } from '@angular/core';

@Component({
  selector: 'glyph',
  templateUrl: './glyph.component.html',
  styleUrls: ['./glyph.component.css']
})
export class GlyphComponent {

  @Input('icon') icon: string = '';

  constructor() { }
}
