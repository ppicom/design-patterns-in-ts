import { Maze } from "./maze/Maze";
import { Door } from "./maze/sites/Door";
import { Room } from "./maze/sites/Room";
import { Wall } from "./maze/sites/Wall";
import { MazeFactory } from "./MazeFactory";

/**
 * This is the case where there is only one type of factory: SinlgetonMazeFactory.
 */
export class SingletonMazeFactory implements MazeFactory {
  private static _instance: MazeFactory;

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
    return new Door(r1, r2);
  }

  static instance(): MazeFactory {
    if (!this._instance) this._instance = new SingletonMazeFactory();
    return this._instance;
  }
}
