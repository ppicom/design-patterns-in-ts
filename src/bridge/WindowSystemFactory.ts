import { PMWindowImpl } from "./implementor/PMWindowImpl";
import { WindowImpl } from "./implementor/WindowImpl";

export class WindowSystemFactory {
  /**
   * Here we could have some logic to chose an implementor.
   * @returns The desired implementor
   */
  static makeWindowSystem(): WindowImpl {
    return new PMWindowImpl();
  }
}
