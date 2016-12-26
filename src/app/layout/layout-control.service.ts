import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class LayoutControlService {

  private _options:boolean = false;
  private _inverseColors:boolean = true;
  private _sidebar:boolean = true;
  @Output('inverseColorsChange') inverseColorsChange: EventEmitter<boolean>;
  @Output('optionsChange') optionsChange: EventEmitter<boolean>;
  @Output('sidebarChange') sidebarChange: EventEmitter<boolean>;

  constructor() {
    this.inverseColorsChange = new EventEmitter();
    this.optionsChange = new EventEmitter();
    this.sidebarChange = new EventEmitter();
  }

  public get inverseColors(): boolean {
    return this._inverseColors;
  }

  public set inverseColors(value: boolean) {
    this._inverseColors = value;
    this.inverseColorsChange.emit(this._inverseColors);
  }

  toggleInverseColors() {
    this._inverseColors = !this._inverseColors;
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
