import { HelpHandler } from "./HelpHandler";
import { Topic } from "./Topic";

export abstract class Widget extends HelpHandler {
  private _parent: Widget;

  protected constructor(parent: Widget, topic = Topic.NO_HELP_TOPIC) {
    super(parent, topic);
    this._parent = parent;
  }
}
