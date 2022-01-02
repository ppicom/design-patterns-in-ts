import { HelpHandler } from "./HelpHandler";
import { Topic } from "./Topic";
import { Widget } from "./Widget";

export class Dialog extends Widget {
  constructor(parent: HelpHandler, topic = Topic.NO_HELP_TOPIC) {
    super(parent as Widget, topic);
  }

  handleHelp(): void {
    if (this.hasHelp()) {
      // offer help on the dialog
    } else {
      super.handleHelp();
    }
  }
}
