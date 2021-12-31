import { Decorator } from "./Decorator";
import { VisualComponent } from "./VisualComponent";

export class BorderDecorator extends Decorator {
  private _width: number;

  constructor(component: VisualComponent, borderWidth: number) {
    super(component);
    this._width = borderWidth;
  }

  draw(): void {
    super.draw();
    this.drawBorder(this._width);
  }

  private drawBorder(width: number) {
    // draw a border
  }
}
