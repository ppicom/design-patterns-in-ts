export default abstract class View {
  display() {
    this.setFocus()
    this.doDisplay()
    this.resetFocus()
  }

  setFocus() {
    //..
  }

  doDisplay(): void { }

  resetFocus(): void {
    //...
  }


}