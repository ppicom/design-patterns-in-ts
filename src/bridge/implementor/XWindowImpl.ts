import { WindowImpl } from "./WindowImpl";

export class XWindowImpl extends WindowImpl {
  deviceBitmap(_bitmapName: string, arg1: number, arg2: number): void {
    throw new Error("One possible implementation.");
  }
}
