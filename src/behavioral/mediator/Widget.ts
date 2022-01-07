import DialogDirector from "./DialogDirector";

export default abstract class Widget {
  private _director: DialogDirector

  constructor(director: DialogDirector) {
    this._director = director
  }

  changed(): void {
    this._director.widgetChanged(this)
  }

  abstract handleMouse(event: Event): void;
  //...
}