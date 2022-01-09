export default abstract class Compositor {
  abstract compose(
    natural: any[], stretch: any[], shrink: any[],
    componentCount: number, lineWidth: number, breaks: number[]
  ): number
}