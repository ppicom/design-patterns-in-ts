import Component from "./Component";
import Compositor from "./Compositor";
import Coord from "./Coord";

export default class Composition {
  private _compositor: Compositor
  private _components: Component[]
  private _componentCount: number
  private _lineWidth: number
  private _lineBreaks: number
  private _lineCount: number

  constructor(c: Compositor) {
    this._compositor = c

    // so TS compiler won't complain:
    this._components = []
    this._componentCount = 0
    this._lineWidth = 0
    this._lineBreaks = 0
    this._lineCount = 0
  }

  repair(): void {
    let natural: Coord[] = []
    let stretchability: Coord[] = []
    let shrinkabilityç: Coord[] = []
    let componentCount: number = this._componentCount
    let breaks: number[] = []

    //prepare arrays with the desired component sizes.
    //...

    let breakCount: number
    breakCount = this._compositor.compose(natural, stretchability, shrinkabilityç, componentCount, this._lineWidth, breaks)

    // layout components according to breaks.
    //...
  }
}