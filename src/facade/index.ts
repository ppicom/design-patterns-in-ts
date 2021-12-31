import { Compiler } from "./Compiler";

const compiler = new Compiler();

// Complexity of the compiler subsystem is hidden behind the `Compiler` class.
compiler.compile(Buffer.from("Hello"), Buffer.from("World"));
