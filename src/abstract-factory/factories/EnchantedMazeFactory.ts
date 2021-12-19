import { Maze } from "../../maze/Maze";
import { Door } from "../../maze/sites/Door";
import { DoorNeedingSpell } from "../../maze/sites/DoorNeedingSpell";
import { EnchantedRoom } from "../../maze/sites/EnchantedRoom";
import { Room } from "../../maze/sites/Room";
import { Wall } from "../../maze/sites/Wall";
import { MazeFactory } from "./MazeFactory";

export class EnchantedMazeFactory implements MazeFactory {
  makeMaze(): Maze {
    return new Maze();
  }

  makeWall(): Wall {
    return new Wall();
  }

  makeRoom(n: number): Room {
    return new EnchantedRoom(n, this.castSpell());
  }

  makeDoor(r1: Room, r2: Room): Door {
    return new DoorNeedingSpell(r2, r2);
  }

  protected castSpell(): string {
    return "Allohomora!";
  }
}
