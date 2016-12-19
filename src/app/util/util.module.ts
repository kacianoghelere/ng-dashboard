import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlyphComponent } from './glyph/glyph.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GlyphComponent],
  exports: [GlyphComponent]
})
export class UtilModule { }
