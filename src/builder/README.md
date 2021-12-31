# Builder

The intent of this creational pattern is to separate the construction of a complex object from its representation so that the same construction process can create different representations. As opposed to the [factory pattern](https://en.wikipedia.org/wiki/Abstract_factory_pattern) which emphasis is on families of objects delivered instantly, the [builder](https://en.wikipedia.org/wiki/Builder_pattern) pattern focuses on constructing a complex object step by step and returning it as a final step.

## Implementation

The goal was to separate the construction of the `Maze` so that it could be done step by step without regard of the underlying construction process. We created two builders: a `StandardMazeBuilder` that constructs a normal `Maze`, and a `CountingMazeBuilder` that returns the number of parts that would have been built during the same construction process.
