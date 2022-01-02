import { HelpHandler } from "./HelpHandler";
import { Topic } from "./Topic";

export class Application extends HelpHandler {
  /**
   * `Application` represent the end of the chain of responsibility and so it
   * has no successor.
   * @param topic
   */
  constructor(topic = Topic.NO_HELP_TOPIC) {
    super(undefined, topic);
  }

  handleHelp(): void {
    // show a list of help topics
  }
}
