import Widget from "./Widget";

export default abstract class DialogDirector {
  abstract showDialog(): void;
  abstract widgetChanged(widget: Widget): void

  protected abstract createWidgets(): void;
}