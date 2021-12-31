import { Room } from "./Room";

export class EnchantedRoom extends Room {
  private _spell: string;

  constructor(n: number, spell: string) {
    super(n);
    this._spell = spell;
  }

  getSpell() {
    return this._spell;
  }
}
