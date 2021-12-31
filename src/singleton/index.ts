import { SingletonMazeFactory } from "./SingletonMazeFactory";

const factory = SingletonMazeFactory.instance();

const maze = factory.makeMaze();
const r1 = factory.makeRoom(1);
const r2 = factory.makeRoom(2);
const door = factory.makeDoor(r1, r2);

maze.addRoom(r1);
maze.addRoom(r2);
