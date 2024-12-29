import { mouseGlobals } from "../global/mouse.global.js";
import { userGlobals } from "../global/user.global.js";
import { Tool } from "../types/tool.js";

export class EraserTool implements Tool {
  public toolType!: "rect" | "free";
  private static eraserTool: EraserTool | null = null;
  //
  private constructor() {
    this.toolType = "free";
  }
  public apply(ctx: CanvasRenderingContext2D): void {
    ctx.clearRect(
      mouseGlobals.currentMouseX,
      mouseGlobals.currentMouseY,
      userGlobals.strokeWidth,
      userGlobals.strokeWidth
    );
  }

  public static getTool(): Tool {
    if (!EraserTool.eraserTool) {
      EraserTool.eraserTool = new EraserTool();
    }

    return EraserTool.eraserTool;
  }
}
