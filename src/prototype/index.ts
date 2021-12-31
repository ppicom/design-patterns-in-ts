import { Maze } from "./maze/Maze";
import { Door } from "./maze/sites/Door";
import { Room } from "./maze/sites/Room";
import { Wall } from "./maze/sites/Wall";
import { MazePrototypeFactory } from "./MazePrototypeFactory";

const factory = new MazePrototypeFactory(
  new Maze(),
  new Wall(),
  new Room(1),
  new Door(new Room(1), new Room(2))
);

const maze = factory.makeMaze();
const r1 = factory.makeRoom(1);
const r2 = factory.makeRoom(2);
const door = factory.makeDoor(r1, r2);

maze.addRoom(r1);
maze.addRoom(r2);
