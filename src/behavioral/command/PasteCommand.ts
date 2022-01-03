import Command from "./Command";
import Document from "./Document";

export default class PasteCommand extends Command {
  private _document: Document;

  constructor(doc: Document) {
    super();
    this._document = doc;
  }

  execute(): void {
    this._document.paste();
  }
}
