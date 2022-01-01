import {
  createReadStream,
  createWriteStream,
  ReadStream,
  WriteStream,
} from "fs";
import Graphic from "./Graphic";
import Image from "./Image";
import { Point } from "./Point";

export default class ImageProxy extends Graphic {
  private _fileName: string;
  private _extent: Point;
  private _image?: Image;

  constructor(fileName: string) {
    super();

    this._fileName = fileName;
    this._extent = Point.zero;
  }

  protected getImage() {
    if (!this._image) {
      this._image = new Image(this._fileName);
    }

    return this._image;
  }

  getExtent(): Point {
    if (this._extent == Point.zero) {
      this._extent = this.getImage().getExtent();
    }

    return this._extent;
  }

  draw(at: Point): void {
    this.getImage().draw(at);
  }

  handleMouse(event: Event): void {
    this.getImage().handleMouse(event);
  }

  save(output: WriteStream): void {
    const imageStream = createReadStream(this._fileName);
    imageStream.pipe(output);
  }

  load(input: ReadStream): void {
    let imageData = "";

    input.on("data", (chunk) => {
      imageData += chunk;
    });

    //...
  }
}
