import { mouseGlobals } from "../global/mouse.global.js";
import { RectangleTool, Tool } from "../types/tool.js";
import { Color } from "./helpers/Color.js";

export class RectEraseTool implements RectangleTool {
  public toolType!: "rect" | "free";
  private static rectEraseTool: RectEraseTool | null = null;
  private constructor() {
    this.toolType = "rect";
  }
  public apply(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(
      mouseGlobals.mouseDownX >= mouseGlobals.mouseUpX ? mouseGlobals.mouseUpX : mouseGlobals.mouseDownX,
      mouseGlobals.mouseDownX >= mouseGlobals.mouseUpX ? mouseGlobals.mouseUpY : mouseGlobals.mouseDownY,
      Math.abs(mouseGlobals.mouseDownX - mouseGlobals.mouseUpX),
      Math.abs(mouseGlobals.mouseDownY - mouseGlobals.mouseUpY)
    );
  }

  public drawBoundingBox(ctx: CanvasRenderingContext2D): void {
    ctx.fillStyle = Color.colorFromHex("#ff000044").color;
    console.log(ctx.fillStyle);
    ctx.lineWidth = 0;
    const initX =
      mouseGlobals.mouseDownX < mouseGlobals.currentMouseX ? mouseGlobals.mouseDownX : mouseGlobals.currentMouseX;
    const initY =
      mouseGlobals.mouseDownY < mouseGlobals.currentMouseY ? mouseGlobals.mouseDownY : mouseGlobals.currentMouseY;
    const w = Math.abs(mouseGlobals.mouseDownX - mouseGlobals.currentMouseX);
    const h = Math.abs(mouseGlobals.mouseDownY - mouseGlobals.currentMouseY);
    ctx.rect(initX, initY, w, h);
    ctx.fill();
  }

  public static getTool(): Tool {
    if (!RectEraseTool.rectEraseTool) {
      RectEraseTool.rectEraseTool = new RectEraseTool();
    }

    return RectEraseTool.rectEraseTool;
  }
}
