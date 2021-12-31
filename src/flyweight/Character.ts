import { Glyph } from "./Glyph";

export class Character extends Glyph {
  private _charcode: number;

  constructor(charcode: number) {
    super();
    this._charcode = charcode;
  }

  draw(): void {}
}
