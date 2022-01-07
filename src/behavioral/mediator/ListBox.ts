import DialogDirector from "./DialogDirector";
import Widget from "./Widget";

export default class ListBox extends Widget {
  private _list: string[]

  constructor(director: DialogDirector, list: string[] = []) {
    super(director)
    this._list = list
  }

  handleMouse(event: Event): void { }

  getSelection(): string {
    return 'the_selected_option'
  }

  setList(list: string[]): void {
    this._list = list
  }

}