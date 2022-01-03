import Command from "./Command";

export default class MacroCommand extends Command {
  private _commands: Command[];

  constructor() {
    super();
    this._commands = [];
  }

  add(command: Command) {
    this._commands.push(command);
  }

  remove(command: Command) {
    const i = this._commands.indexOf(command); // because it would be the same instance.
    if (i > 0) {
      this._commands.splice(i, 1);
    }
  }

  execute(): void {
    this._commands.forEach((command) => {
      command.execute();
    });
  }
}
