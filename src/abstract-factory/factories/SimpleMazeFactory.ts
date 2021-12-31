import { Maze } from "../maze/Maze";
import { Door } from "../maze/sites/Door";
import { Room } from "../maze/sites/Room";
import { Wall } from "../maze/sites/Wall";
import { MazeFactory } from "./MazeFactory";

/**
 * Here "Simple" means that it creates the simpler version of
 * maze sites. Other factories will create sites that are enchanted
 * or the like,
 */
export class SimpleMazeFactory implements MazeFactory {
  makeMaze(): Maze {
    return new Maze();
  }

  makeWall(): Wall {
    return new Wall();
  }

  makeRoom(n: number): Room {
    return new Room(n);
  }

  makeDoor(r1: Room, r2: Room): Door {
    return new Door(r2, r2);
  }
}
