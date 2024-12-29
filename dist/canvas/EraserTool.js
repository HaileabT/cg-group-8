import { mouseGlobals } from "../global/mouse.global.js";
import { userGlobals } from "../global/user.global.js";
export class EraserTool {
    //
    constructor() {
        this.toolType = "free";
    }
    apply(ctx) {
        ctx.clearRect(mouseGlobals.currentMouseX, mouseGlobals.currentMouseY, userGlobals.strokeWidth, userGlobals.strokeWidth);
    }
    static getTool() {
        if (!EraserTool.eraserTool) {
            EraserTool.eraserTool = new EraserTool();
        }
        return EraserTool.eraserTool;
    }
}
EraserTool.eraserTool = null;
