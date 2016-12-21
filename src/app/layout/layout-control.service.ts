import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LayoutControlService {

  private _options:boolean = false;
  private _sidebar:boolean = true;
  @Output('sidebarChange') sidebarChange:EventEmitter<boolean>;
  @Output('optionsChange') optionsChange:EventEmitter<boolean>;

  constructor() {
    this.sidebarChange = new EventEmitter();
    this.optionsChange = new EventEmitter();
  }

  public get options(): boolean {
    return this._options;
  }

  public set options(value: boolean) {
    this._options = value;
    this.optionsChange.emit(this._options);
  }

  toggleOptions() {
    this.options = !this.options;
  }

  public get sidebar(): boolean {
    return this._sidebar;
  }

  public set sidebar(value: boolean) {
    this._sidebar = value;
    this.sidebarChange.emit(this._sidebar);
  }

  toggleSidebar() {
    this.sidebar = !this.sidebar;
  }
}
