export class Currency {
  private _currency: string;
  private _amount: number;

  constructor({ currency, amount }: { amount: number; currency: string }) {
    this._currency = currency;
    this._amount = amount;
  }

  getAmount(): number {
    return this._amount;
  }

  getCurrency(): string {
    return this._currency;
  }

  /**
   * Ignore currency for the sake of simplicity.
   */
  add(c: Currency) {
    this._amount += c.getAmount();
  }
}
