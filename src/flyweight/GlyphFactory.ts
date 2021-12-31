import { Character } from "./Character";
import { Column } from "./Column";
import { Row } from "./Row";

export class GlyphFactory {
  private _characters: Character[];

  constructor() {
    this._characters = [];
  }

  makeCharacter(charcode: number) {
    if (!this._characters[charcode])
      this._characters[charcode] = new Character(charcode);

    return this._characters[charcode];
  }

  makeRow() {
    return new Row();
  }

  makeColumn() {
    return new Column();
  }
}
