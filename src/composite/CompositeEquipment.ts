import { Equipment } from "./Equipment";
import { Iterator } from "./iterator/Iterator";
import { ListIterator } from "./iterator/ListIterator";
import { NullIterator } from "./iterator/NullIterator";
import { Currency } from "./util/Currency";
import { Watt } from "./util/Watt";

export class CompositeEquipment extends Equipment {
  private _equipment: Equipment[];

  constructor(name: string) {
    super(name);
    this._equipment = [];
  }

  power(): Watt {
    const totalWattage = new Watt(0);
    this._equipment.forEach((e) => {
      totalWattage.add(e.power());
    });
    return totalWattage;
  }

  netPrice(): Currency {
    const totalNetPrice = new Currency({ currency: "EUR", amount: 0 });
    this._equipment.forEach((e) => {
      totalNetPrice.add(e.netPrice());
    });
    return totalNetPrice;
  }

  discountPrice(): Currency {
    const totalDiscountPrice = new Currency({ currency: "EUR", amount: 0 });
    this._equipment.forEach((e) => {
      totalDiscountPrice.add(e.discountPrice());
    });
    return totalDiscountPrice;
  }

  /**
   * @override
   */
  add(e: Equipment): void {
    this._equipment.push(e);
  }

  /**
   * @override
   */
  remove(e: Equipment): void {
    const i = this._equipment.indexOf(e);
    if (i >= 0) this._equipment.splice(i, 1);
  }

  /**
   *  @override
   */
  createIterator(): Iterator<Equipment> {
    return new ListIterator(this._equipment.slice());
  }
}
