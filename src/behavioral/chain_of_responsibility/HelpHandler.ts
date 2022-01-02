import { Topic } from "./Topic";

export class HelpHandler {
  private _successor?: HelpHandler;
  private _topic: Topic;

  constructor(successor?: HelpHandler, topic = Topic.NO_HELP_TOPIC) {
    this._successor = successor;
    this._topic = topic;
  }

  hasHelp() {
    return this._topic !== Topic.NO_HELP_TOPIC;
  }

  handleHelp() {
    if (this._successor) {
      this._successor.handleHelp();
    }
  }
}
