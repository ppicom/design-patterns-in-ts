import { CompositeEquipment } from "./CompositeEquipment";
import EquipmentVisitor from "./EquipmentVisitor";

export class Cabinet extends CompositeEquipment {
  accept(visitor: EquipmentVisitor): void {
    for (let i = this.createIterator(); !i.isDone(); i.next()) {
      i.currentItem().accept(visitor)
    }

    visitor.visitCabinet(this)
  }
}
