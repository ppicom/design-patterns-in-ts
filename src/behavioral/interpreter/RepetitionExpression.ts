import { ReadStream } from "fs";
import RegularExpression from "./RegularExpression";

export default class RepetitionExpression extends RegularExpression {
  repetition: RegularExpression;

  constructor(repetition: RegularExpression) {
    super();
    this.repetition = repetition;
  }

  interpret(): void {
    throw new Error("Method not implemented.");
  }

  match(input: ReadStream): ReadStream[] {
    const allMatches: ReadStream[] = [];
    let matched: ReadStream[] = this.repetition.match(input);
    while (matched.length) {
      allMatches.push(...matched);
      matched = this.repetition.match(input);
    }

    return allMatches;
  }
}
