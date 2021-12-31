import { Decorator } from "./Decorator";
import { VisualComponent } from "./VisualComponent";

export class ScrollDecorator extends Decorator {
  constructor(component: VisualComponent) {
    super(component);
  }

  resize(): void {
    super.resize();
    this.addScrollingToView();
  }

  private addScrollingToView() {}
}
