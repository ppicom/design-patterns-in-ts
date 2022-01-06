export interface Iterator<T> {
  first(): void;
  next(): void;
  isDone(): boolean;
  currentItem(): T;
}
