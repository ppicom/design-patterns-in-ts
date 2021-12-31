export class Watt {
  private _watts: number;
  constructor(watts: number) {
    this._watts = watts;
  }

  getWatts(): number {
    return this._watts;
  }

  add(w: Watt) {
    this._watts += w.getWatts();
  }
}
