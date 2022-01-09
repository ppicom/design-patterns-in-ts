import { Equipment } from "./Equipment";
import EquipmentVisitor from "./EquipmentVisitor";
import { Currency } from "./util/Currency";
import { Watt } from "./util/Watt";

export class FloppyDisk extends Equipment {
  power(): Watt {
    throw new Error("Method not implemented.");
  }
  netPrice(): Currency {
    throw new Error("Method not implemented.");
  }
  discountPrice(): Currency {
    throw new Error("Method not implemented.");
  }

  accept(visitor: EquipmentVisitor): void {
    visitor.visitFloppyDisk(this)
  }
}
