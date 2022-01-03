import Application from "./Application";
import Document from "./Document";
import Command from "./Command";

export default class OpenCommand extends Command {
  private _application: Application;

  constructor(application: Application) {
    super();
    this._application = application;
  }

  protected askUser(): string {
    // ... ask user for the name of the document to open.
    return "document_name";
  }

  execute(): void {
    const name = this.askUser();

    if (name && name.length > 0) {
      const doc = new Document(name);
      this._application.addDocument(doc);
      doc.open();
    }
  }
}
