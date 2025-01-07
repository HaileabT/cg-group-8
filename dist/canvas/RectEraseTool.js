import { mouseGlobals } from "../global/mouse.global.js";
import { Color } from "./helpers/Color.js";
export class RectEraseTool {
    constructor() {
        this.toolType = "rect";
    }
    apply(ctx) {
        ctx.clearRect(mouseGlobals.mouseDownX >= mouseGlobals.mouseUpX ? mouseGlobals.mouseUpX : mouseGlobals.mouseDownX, mouseGlobals.mouseDownX >= mouseGlobals.mouseUpX ? mouseGlobals.mouseUpY : mouseGlobals.mouseDownY, Math.abs(mouseGlobals.mouseDownX - mouseGlobals.mouseUpX), Math.abs(mouseGlobals.mouseDownY - mouseGlobals.mouseUpY));
    }
    drawBoundingBox(ctx) {
        ctx.fillStyle = Color.colorFromHex("#ff000044").color;
        console.log(ctx.fillStyle);
        ctx.lineWidth = 0;
        const initX = mouseGlobals.mouseDownX < mouseGlobals.currentMouseX ? mouseGlobals.mouseDownX : mouseGlobals.currentMouseX;
        const initY = mouseGlobals.mouseDownY < mouseGlobals.currentMouseY ? mouseGlobals.mouseDownY : mouseGlobals.currentMouseY;
        const w = Math.abs(mouseGlobals.mouseDownX - mouseGlobals.currentMouseX);
        const h = Math.abs(mouseGlobals.mouseDownY - mouseGlobals.currentMouseY);
        ctx.rect(initX, initY, w, h);
        ctx.fill();
    }
    static getTool() {
        if (!RectEraseTool.rectEraseTool) {
            RectEraseTool.rectEraseTool = new RectEraseTool();
        }
        return RectEraseTool.rectEraseTool;
    }
}
RectEraseTool.rectEraseTool = null;
