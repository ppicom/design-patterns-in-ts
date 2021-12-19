# Abstract factory

It's a creational pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes. The implementations of the `AbstractFactory` use (in this case) the [Factory Method](https://en.wikipedia.org/wiki/Factory_method_pattern), but it can also use the [Prototype](https://en.wikipedia.org/wiki/Prototype_pattern).

## Implementation

The goal was to be able to create a `Maze` with two rooms and a door without depending on the constructor calls nor the type of the `MapSite`s used.
