import { elementSelector } from "../../utils/elementSelector.js";

export class RectToolIndicator {
  static indicator: RectToolIndicator | null = null;
  divElement: HTMLDivElement | null = null;
  anchorX: number | undefined = undefined;
  anchorY: number | undefined = undefined;
  deltaX: number = 0;
  deltaY: number = 0;
  private constructor(el: HTMLDivElement) {
    this.divElement = el;
  }

  public static async getIndicator() {
    if (!RectToolIndicator.indicator) {
      const indEl = await elementSelector<HTMLDivElement>("#rect-indicator");

      if (!indEl) {
        throw new Error("Rectangle indicator not found.");
      }

      RectToolIndicator.indicator = new RectToolIndicator(indEl);
    }

    return RectToolIndicator.indicator;
  }

  public resetAnchor() {
    this.anchorX = undefined;
    this.anchorY = undefined;
  }

  public hideIndicator() {
    if (!this.divElement) return;
    this.resetAnchor();
    this.divElement.style.display = "none";
  }

  public showIndicator(x: number, y: number) {
    if (!this.divElement) return;
    this.anchorX = this.anchorX ? this.anchorX : x;
    this.anchorY = this.anchorY ? this.anchorY : y;

    console.log("Anchor Points: ", this.anchorX, this.anchorY, x, y);
    this.divElement.style.display = "block";
  }

  public moveIndicatorTo(x: number, y: number) {
    if (!this.divElement) return;

    this.divElement.style.left = `${x}px`;
    this.divElement.style.top = `${y}px`;
  }

  public resizeIndicator(x: number, y: number, deltaX: number, deltaY: number, ctx: CanvasRenderingContext2D) {
    if (!this.divElement) return;

    const currentX = parseFloat(getComputedStyle(this.divElement).left.slice(0, -2));
    const currentY = parseFloat(getComputedStyle(this.divElement).top.slice(0, -2));

    const newX = Math.min(currentX, x);
    const newY = Math.min(currentY, y);

    console.log("This deltas: ", this.deltaX, this.deltaY);
    console.log("New deltas: ", deltaX, deltaY);
    const xDeltaAreOpposite = this.deltaX * deltaX < 0;
    const yDeltaAreOpposite = this.deltaY * deltaY < 0;

    this.anchorX = xDeltaAreOpposite && x < (this.anchorX ?? x) ? x : this.anchorX;
    this.anchorY = yDeltaAreOpposite && y < (this.anchorY ?? y) ? y : this.anchorY;

    this.divElement.style.left = `${newX}px`;
    this.divElement.style.top = `${newY}px`;

    this.divElement.style.width = `${Math.abs((this.anchorX ?? x) - x)}px`;
    this.divElement.style.height = `${Math.abs((this.anchorY ?? y) - y)}px`;

    this.deltaX = deltaX;
    this.deltaY = deltaY;
  }

  public isIndicatorVisible() {
    if (!this.divElement) return;
    return this.divElement.style.display !== "none";
  }
}
