import { WindowImpl } from "../implementor/WindowImpl";
import { WindowSystemFactory } from "../WindowSystemFactory";

export abstract class Window {
  private _windowImp: WindowImpl;

  constructor() {
    this._windowImp = WindowSystemFactory.makeWindowSystem();
  }

  abstract drawContents(): void;

  abstract open(): void;
  abstract close(): void;
  abstract iconify(): void;
  abstract deiconify(): void;

  abstract setOrigin(at: any): void;
  abstract setExtent(extent: any): void;
  abstract raise(): void;
  abstract lower(): void;

  protected getWindowImpl(): WindowImpl {
    return this._windowImp;
  }

  protected getView(): any {}
}
