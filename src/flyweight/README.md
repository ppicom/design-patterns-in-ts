# Flyweight

The intent of this pattern is to reduce the amount of memory used by sharing objects that otherwise would be instantiated a massive number of times.

# Implementation

In this case, the example simulates the implementation of a text editor where instead of instantiating the `Character` class once for each character in the document, we have an array of `Character` in the `GlyphFactory` and a BTree in the `GlyphContext`. This two elements in combination allow to build the document sharing the `Character` objects.
