import { Window } from "./Window";

export class IconWindow extends Window {
  private _bitmapName: string;

  constructor(bitmapName: string) {
    super();
    this._bitmapName = bitmapName;
  }

  drawContents(): void {
    const imp = this.getWindowImpl();
    if (imp) {
      imp.deviceBitmap(this._bitmapName, 0, 0);
    }
  }

  open(): void {
    throw new Error("Method not implemented.");
  }

  close(): void {
    throw new Error("Method not implemented.");
  }

  iconify(): void {
    throw new Error("Method not implemented.");
  }

  deiconify(): void {
    throw new Error("Method not implemented.");
  }

  setOrigin(at: any): void {
    throw new Error("Method not implemented.");
  }

  setExtent(extent: any): void {
    throw new Error("Method not implemented.");
  }

  raise(): void {
    throw new Error("Method not implemented.");
  }

  lower(): void {
    throw new Error("Method not implemented.");
  }
}
