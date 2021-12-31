import { Font } from "./Font";

export class GlyphContext {
  next(step = 1) {}
  insert(quantity = 1) {}

  getFont() {}

  setFont(font: Font, span = 1) {}
}
