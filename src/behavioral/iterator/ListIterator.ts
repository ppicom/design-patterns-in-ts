import { Iterator } from "./Iterator";

export default class ListIterator<T> implements Iterator<T> {
  private _elements: T[];
  private _current: number;

  constructor(list: T[]) {
    this._elements = list;
    this._current = 0;
  }

  first(): void {
    this._current = 0;
  }

  next(): void {
    this._current++;
  }

  isDone(): boolean {
    return this._current >= this._elements.length;
  }

  currentItem(): T {
    if (this.isDone()) {
      throw new Error("Iterator out of bounds.");
    }

    return this._elements[this._current];
  }
}
