import Graphic from "./Graphic";
import { Point } from "./Point";

export default class Image extends Graphic {
  private _fileName: string;

  constructor(fileName: string) {
    super();
    this._fileName = fileName;
  }

  draw(at: Point): void {
    // Draw the actual image.
  }

  handleMouse(event: Event): void {
    // Handle the resizing of the image.
  }

  getExtent(): Point {
    // Return the actual size of the image.
    return new Point(0, 0);
  }
}
