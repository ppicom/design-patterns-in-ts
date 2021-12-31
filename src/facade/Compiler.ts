import { Parser } from "./Parser";
import { ProgramNodeBuilder } from "./ProgramNodeBuilder";
import { RISCCodeGenerator } from "./RISCCodeGenerator";
import { Scanner } from "./Scanner";

export class Compiler {
  compile(inputStream: Buffer, bytecodeStream: Buffer) {
    const scanner = new Scanner(inputStream);
    const builder = new ProgramNodeBuilder();
    const parser = new Parser();

    parser.parse(scanner, builder);

    const generator = new RISCCodeGenerator(bytecodeStream);
    const parseTree = builder.getRootNode();
    parseTree.traverse(generator);
  }
}
