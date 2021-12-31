import { Window } from "./Window";

export class ApplicationWindow extends Window {
  drawContents(): void {
    this.getView().drawOn(this);
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
