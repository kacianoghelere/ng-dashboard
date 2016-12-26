import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Bs3Module } from '../bs3-components/bs3.module';

import { MainComponent } from './main.component';


@NgModule({
  imports: [CommonModule, Bs3Module],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule { }
