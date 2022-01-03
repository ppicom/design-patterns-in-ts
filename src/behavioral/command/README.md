# Command

The intent of this pattern is to decouple the element that knows when to call an operation from the object that knows how to perform it.

# Implementation

In the example, we simulate commands in a text editor. The `OpenCommand` would create a new document and open it, the `PasteCommand` would paste the contents of the clipboard and the `MacroCommand` would allow the creation of sequences of commands.
