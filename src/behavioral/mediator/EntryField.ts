import DialogDirector from "./DialogDirector";
import Widget from "./Widget";

export default class EntryField extends Widget {
  private _text: string

  constructor(director: DialogDirector, text: string = '') {
    super(director)
    this._text = text
  }

  handleMouse(event: Event): void { }

  setText(text: string): void {
    this._text = text
  }

  getText(): string {
    return this._text
  }
}