import { ReadStream } from "fs";
import { Duplex } from "stream";
import RegularExpression from "./RegularExpression";

export default class SequenceExpression extends RegularExpression {
  expression1: RegularExpression;
  expression2: RegularExpression;

  constructor(e1: RegularExpression, e2: RegularExpression) {
    super();
    this.expression1 = e1;
    this.expression2 = e2;
  }

  interpret(): void {
    throw new Error("Method not implemented.");
  }

  match(input: ReadStream): ReadStream[] {
    return this.expression1
      .match(input)
      .map((match) => this.expression2.match(match))
      .reduce((acc, curr) => acc.concat(curr));
  }
}
