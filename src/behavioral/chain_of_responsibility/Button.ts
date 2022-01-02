import { Topic } from "./Topic";
import { Widget } from "./Widget";

export class Button extends Widget {
  constructor(parent: Widget, topic = Topic.NO_HELP_TOPIC) {
    super(parent, topic);
  }

  handleHelp(): void {
    if (this.hasHelp()) {
      // offer help on the button
    } else {
      super.handleHelp();
    }
  }
}
