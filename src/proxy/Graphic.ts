import { ReadStream, WriteStream } from "fs";
import { Point } from "./Point";

export default class Graphic {
  protected constructor() {}

  draw(at: Point): void {}
  handleMouse(event: Event): void {}

  getExtent(): Point {
    return new Point(0, 0);
  }

  load(input: ReadStream): void {}

  save(output: WriteStream): void {}
}
