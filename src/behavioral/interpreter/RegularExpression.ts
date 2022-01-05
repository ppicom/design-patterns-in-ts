import { ReadStream } from "fs";

export default abstract class RegularExpression {
  abstract interpret(): void;
  abstract match(input: ReadStream): ReadStream[];
}
