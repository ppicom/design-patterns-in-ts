import { MapSite } from "./MapSite";

export class Wall implements MapSite {
  enter(): void {}

  clone(): this {
    const clone = Object.create(this);
    return clone;
  }
}
