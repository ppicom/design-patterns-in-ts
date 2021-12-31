import { GlyphContext } from "./GlyphContext";

export abstract class Glyph {
  protected constructor() {}

  abstract draw(): void;

  setFont(context: GlyphContext) {}

  first(context: GlyphContext) {}
  next(context: GlyphContext) {}
  isDone(context: GlyphContext) {}
  current(context: GlyphContext) {}

  insert(glyph: Glyph, context: GlyphContext) {}
  remove(context: GlyphContext) {}
}
