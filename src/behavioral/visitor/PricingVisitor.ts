import { Cabinet } from "./Cabinet";
import EquipmentVisitor from "./EquipmentVisitor";
import { FloppyDisk } from "./FloppyDisk";
import { Currency } from "./util/Currency";

export default class PricingVisitor extends EquipmentVisitor {
  private _total: Currency;

  constructor() {
    super()
    this._total = new Currency({ currency: 'EUR', amount: 0 })
  }

  visitFloppyDisk(f: FloppyDisk): void {
    this._total.add(f.netPrice())
  }

  visitCabinet(c: Cabinet): void {
    this._total.add(c.netPrice())
  }
}