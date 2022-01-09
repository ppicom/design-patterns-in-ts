import EquipmentVisitor from "./EquipmentVisitor";
import { Iterator } from "./iterator/Iterator";
import { NullIterator } from "./iterator/NullIterator";
import { Currency } from "./util/Currency";
import { Watt } from "./util/Watt";

export abstract class Equipment {
  protected _name: string;

  protected constructor(name: string) {
    this._name = name;
  }

  abstract power(): Watt;
  abstract netPrice(): Currency;
  abstract discountPrice(): Currency;

  add(e: Equipment): void { }

  remove(e: Equipment): void { }

  createIterator(): Iterator<Equipment> {
    return new NullIterator();
  }

  abstract accept(visitor: EquipmentVisitor): void
}
