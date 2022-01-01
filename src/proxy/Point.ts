export class Point {
  static zero = new Point(0, 0);

  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }
}
