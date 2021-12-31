import { MazeFactory } from "./factories/MazeFactory";
import { Maze } from "./maze/Maze";
import { Direction } from "./maze/sites/Direction";

export class MazeGame {
  /**
   * Notice how thanks to the factory there's not a single call
   * to a constructor in this code.
   *
   * The code is not necessarily shorter than if we had made
   * all the necessary calls to constructors to build the same two rooms,
   * but this way the instantiation of the maze is delegated to the factory.
   *
   * Also this way allows for different factories to create different
   * families of `MazeSite` components.
   *
   * @param factory A factory capable of instatiating MazeSites
   * @returns A maze with two rooms and a door connecting them
   */
  public static createMaze(factory: MazeFactory): Maze {
    const maze = factory.makeMaze();
    const r1 = factory.makeRoom(1);
    const r2 = factory.makeRoom(2);
    const door = factory.makeDoor(r2, r2);

    maze.addRoom(r1);
    maze.addRoom(r2);

    r1.setSide(Direction.NORTH, factory.makeWall());
    r1.setSide(Direction.EAST, door);
    r1.setSide(Direction.SOUTH, factory.makeWall());
    r1.setSide(Direction.WEST, factory.makeWall());

    r2.setSide(Direction.NORTH, factory.makeWall());
    r2.setSide(Direction.EAST, factory.makeWall());
    r2.setSide(Direction.SOUTH, factory.makeWall());
    r2.setSide(Direction.WEST, door);

    return maze;
  }
}
