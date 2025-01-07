import { appGlobals } from "../global/app.global.js";
import { mouseGlobals } from "../global/mouse.global.js";
import { RectangleTool, Tool } from "../types/tool.js";
import { Color } from "./helpers/Color.js";

export class ClipTool implements RectangleTool {
  public toolType!: "rect" | "free";
  private static clipTool: ClipTool | null = null;
  private constructor() {
    this.toolType = "rect";
  }
  public apply(ctx: CanvasRenderingContext2D): void {
    const maxX = Math.max(mouseGlobals.mouseDownX, mouseGlobals.mouseUpX);
    const maxY = Math.max(mouseGlobals.mouseDownY, mouseGlobals.mouseUpY);
    const minX = Math.min(mouseGlobals.mouseDownX, mouseGlobals.mouseUpX);
    const minY = Math.min(mouseGlobals.mouseDownY, mouseGlobals.mouseUpY);
    ctx.clearRect(0, 0, minX, appGlobals.canvas?.height ?? window.innerHeight);
    ctx.clearRect(
      0,
      maxY,
      appGlobals.canvas?.width ?? window.innerWidth,
      appGlobals.canvas?.height ?? window.innerHeight - maxY
    );
    ctx.clearRect(
      maxX,
      0,
      appGlobals.canvas?.width ?? window.innerWidth - maxX,
      appGlobals.canvas?.height ?? window.innerHeight
    );
    ctx.clearRect(0, 0, appGlobals.canvas?.width ?? window.innerWidth, minY);
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
    if (!ClipTool.clipTool) {
      ClipTool.clipTool = new ClipTool();
    }

    return ClipTool.clipTool;
  }
}
