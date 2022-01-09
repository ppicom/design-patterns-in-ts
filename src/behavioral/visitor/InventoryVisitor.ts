import { Cabinet } from "./Cabinet";
import EquipmentVisitor from "./EquipmentVisitor";
import { FloppyDisk } from "./FloppyDisk";
import Inventory from "./Inventory";

export default class InventoryVisitor extends EquipmentVisitor {
  private _inventory: Inventory

  constructor() {
    super()
    this._inventory = new Inventory()
  }

  visitFloppyDisk(f: FloppyDisk): void {
    this._inventory.accumulate(f)
  }

  visitCabinet(c: Cabinet): void {
    this._inventory.accumulate(c)
  }
}