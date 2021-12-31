import { WindowImpl } from "./WindowImpl";

export class PMWindowImpl extends WindowImpl {
  deviceBitmap(_bitmapName: string, arg1: number, arg2: number): void {
    throw new Error("Another possible implementation.");
  }
}
