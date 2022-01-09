import { Iterator } from "./Iterator";

/**
 * By having an array of type T that is always empty and returning the first element
 * we can return undefined without having to find a way to trick the
 * Typescript compiler into letting us return null or undefined.
 */
export class NullIterator<T> implements Iterator<T> {
  private _alwaysEmptyArray: T[];

  constructor() {
    this._alwaysEmptyArray = [];
  }

  isDone(): boolean {
    return true;
  }

  first(): T {
    return this._alwaysEmptyArray[0];
  }

  next(): T {
    return this._alwaysEmptyArray[0];
  }

  currentItem(): T {
    return this._alwaysEmptyArray[0];
  }
}
