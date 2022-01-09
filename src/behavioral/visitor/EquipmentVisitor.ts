import { Cabinet } from "./Cabinet";
import { FloppyDisk } from "./FloppyDisk";

export default abstract class EquipmentVisitor {
  abstract visitFloppyDisk(f: FloppyDisk): void
  abstract visitCabinet(c: Cabinet): void
}