import { BombedMazeFactory } from "../abstract-factory/factories/BombedMazeFactory";
import { EnchantedMazeFactory } from "../abstract-factory/factories/EnchantedMazeFactory";
import { MazeFactory } from "../abstract-factory/factories/MazeFactory";
import { Maze } from "../abstract-factory/maze/Maze";
import { Door } from "../abstract-factory/maze/sites/Door";
import { Room } from "../abstract-factory/maze/sites/Room";
import { Wall } from "../abstract-factory/maze/sites/Wall";

export class SingletonMultipleTypesMazeFactory implements MazeFactory {
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

  /**
   * Here would be a good place to use a registry of singletons.
   */
  static instance(): MazeFactory {
    if (!this._instance) {
      const instanceType = process.env.MAZE_STYLE || "";

      if (/bombed/.test(instanceType)) this._instance = new BombedMazeFactory();
      if (/enchanted/.test(instanceType))
        this._instance = new EnchantedMazeFactory();
    }

    return this._instance;
  }
}
