# Prototype

The intent of this creational pattern is to specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

## Implementation

I've come accross some implementations of this pattern using `Object.create(this)` in the `clone()` method of the classes, but I've found that this approach turns the private properties of classes into public properties.
