import { mouseGlobals } from "../global/mouse.global.js";
import { userGlobals } from "../global/user.global.js";
export class DrawTool {
    constructor() {
        this.toolType = "free";
    }
    apply(ctx) {
        console.log("Draw applied.");
        ctx.beginPath();
        ctx.strokeStyle = userGlobals.strokeColor.color;
        ctx.fillStyle = userGlobals.strokeColor.color;
        ctx.arc(mouseGlobals.currentMouseX, mouseGlobals.currentMouseY, userGlobals.strokeWidth / 2, 0, 2 * Math.PI);
        ctx.lineWidth = 0;
        ctx.fill();
        if (!mouseGlobals.mouseIsMoved) {
            mouseGlobals.lastMouseX = mouseGlobals.currentMouseX;
            mouseGlobals.lastMouseY = mouseGlobals.currentMouseY;
            mouseGlobals.mouseIsMoved = true;
            return;
        }
        ctx.beginPath();
        ctx.moveTo(mouseGlobals.lastMouseX, mouseGlobals.lastMouseY);
        ctx.lineTo(mouseGlobals.currentMouseX, mouseGlobals.currentMouseY);
        ctx.lineWidth = userGlobals.strokeWidth;
        ctx.stroke();
        mouseGlobals.lastMouseX = mouseGlobals.currentMouseX;
        mouseGlobals.lastMouseY = mouseGlobals.currentMouseY;
    }
    static getTool() {
        if (!DrawTool.drawTool) {
            DrawTool.drawTool = new DrawTool();
        }
        return DrawTool.drawTool;
    }
}
DrawTool.drawTool = null;
