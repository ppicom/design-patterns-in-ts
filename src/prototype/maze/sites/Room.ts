import { Direction } from "./Direction";
import { MapSite } from "./MapSite";

export class Room implements MapSite {
  private _number: number;
  private _sides: MapSite[];

  constructor(number: number) {
    this._number = number;
    this._sides = Array.from({ length: 4 });
  }

  enter(): void {}

  getSide(direction: Direction): MapSite {
    return this._sides[direction];
  }

  setSide(direction: Direction, site: MapSite): void {
    this._sides[direction] = site;
  }

  getNumber(): number {
    return this._number;
  }

  clone() {
    return new Room(this._number);
  }

  initialize(n: number) {
    this._number = n;
  }
}
