import Button from "./Button";
import DialogDirector from "./DialogDirector";
import EntryField from "./EntryField";
import ListBox from "./ListBox";
import Widget from "./Widget";

export default class FontDialogDirector extends DialogDirector {
  private _cancel?: Button
  private _ok?: Button
  private _fontList?: ListBox
  private _fontName?: EntryField


  showDialog(): void {

  }

  protected createWidgets(): void {
    this._cancel = new Button(this)
    this._ok = new Button(this)
    this._fontName = new EntryField(this)
    this._fontList = new ListBox(this)

    // fill the listbox with available names

    // assemble the widgets in the dialog
  }

  widgetChanged(widget: Widget): void {
    if (widget === this._fontList) {
      this._fontName?.setText(this._fontList.getSelection())
    } else if (widget === this._ok) {
      // apply selected font and dismiss the dialog.
    }
  }
}