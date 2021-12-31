export interface Iterator<T> {
  isDone(): boolean;
  first(): T;
  next(): T;
  currentItem(): T;
}
