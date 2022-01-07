import Widget from "./Widget";

export default class Button extends Widget {
  handleMouse(event: Event): void {
    this.changed()
  }

  setText(text: string): void { }
}