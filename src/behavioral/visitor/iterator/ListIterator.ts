import { Iterator } from "./Iterator";

export class ListIterator<T> implements Iterator<T> {
  private _elements: T[];
  private _i: number;

  constructor(elements: T[]) {
    this._elements = elements;
    this._i = 0;
  }

  isDone(): boolean {
    return this._i >= this._elements.length;
  }

  first(): T {
    return this._elements[0];
  }

  next(): T {
    return this._elements[++this._i];
  }

  currentItem(): T {
    return this._elements[this._i];
  }
}
