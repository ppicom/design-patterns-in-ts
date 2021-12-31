import { Equipment } from "./Equipment";
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
}
