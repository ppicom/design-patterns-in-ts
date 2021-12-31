import { VisualComponent } from "./VisualComponent";

export class Decorator extends VisualComponent {
  private _component: VisualComponent;

  constructor(component: VisualComponent) {
    super();
    this._component = component;
  }

  draw(): void {
    this._component.draw();
  }

  resize(): void {
    this._component.resize();
  }
}
