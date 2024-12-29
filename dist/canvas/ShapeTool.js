import { mouseGlobals } from "../global/mouse.global.js";
import { userGlobals } from "../global/user.global.js";
import { Color } from "./helpers/Color.js";
export class ShapeTool {
    constructor(shape) {
        this.toolType = "rect";
        this.shape = shape;
    }
    drawBoundingBox(ctx) {
        ctx.beginPath();
        ctx.fillStyle = Color.colorFromHex("#ff000044").color;
        console.log(ctx.fillStyle);
        ctx.lineWidth = 0;
        const initX = mouseGlobals.mouseDownX < mouseGlobals.currentMouseX ? mouseGlobals.mouseDownX : mouseGlobals.currentMouseX;
        const initY = mouseGlobals.mouseDownY < mouseGlobals.currentMouseY ? mouseGlobals.mouseDownY : mouseGlobals.currentMouseY;
        const w = Math.abs(mouseGlobals.mouseDownX - mouseGlobals.currentMouseX);
        const h = Math.abs(mouseGlobals.mouseDownY - mouseGlobals.currentMouseY);
        ctx.rect(initX, initY, w, h);
        ctx.closePath();
        ctx.fill();
    }
    apply(ctx) {
        switch (this.shape) {
            case "circle":
                this.drawCircle(ctx);
                break;
            case "rectangle":
                this.drawRectangle(ctx);
                break;
            case "triangle":
                this.drawTriangle(ctx);
                break;
        }
    }
    drawTriangle(ctx) {
        ctx.beginPath();
        ctx.fillStyle = userGlobals.fillColor.color;
        ctx.strokeStyle = userGlobals.strokeColor.color;
        ctx.lineWidth = userGlobals.strokeWidth;
        const p1x = (mouseGlobals.mouseDownX + mouseGlobals.mouseUpX) / 2;
        const p1y = mouseGlobals.mouseDownY;
        ctx.moveTo(p1x, p1y);
        const p2x = mouseGlobals.mouseUpX;
        const p2y = mouseGlobals.mouseUpY;
        ctx.lineTo(p2x, p2y);
        const p3x = mouseGlobals.mouseDownX;
        const p3y = mouseGlobals.mouseUpY;
        ctx.lineTo(p3x, p3y);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    drawRectangle(ctx) {
        ctx.beginPath();
        ctx.fillStyle = userGlobals.fillColor.color;
        ctx.strokeStyle = userGlobals.strokeColor.color;
        ctx.lineWidth = userGlobals.strokeWidth;
        const initX = mouseGlobals.mouseDownX < mouseGlobals.mouseUpX ? mouseGlobals.mouseDownX : mouseGlobals.mouseUpX;
        const initY = mouseGlobals.mouseDownY < mouseGlobals.mouseUpY ? mouseGlobals.mouseDownY : mouseGlobals.mouseUpY;
        const w = Math.abs(mouseGlobals.mouseDownX - mouseGlobals.mouseUpX);
        const h = Math.abs(mouseGlobals.mouseDownY - mouseGlobals.mouseUpY);
        ctx.rect(initX, initY, w, h);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    drawCircle(ctx) {
        ctx.beginPath();
        ctx.fillStyle = userGlobals.fillColor.color;
        ctx.strokeStyle = userGlobals.strokeColor.color;
        ctx.lineWidth = userGlobals.strokeWidth;
        const centerX = (mouseGlobals.mouseDownX + mouseGlobals.mouseUpX) / 2;
        const centerY = (mouseGlobals.mouseDownY + mouseGlobals.mouseUpY) / 2;
        const radiusX = Math.abs(mouseGlobals.mouseDownX - mouseGlobals.mouseUpX) / 2;
        const radiusY = Math.abs(mouseGlobals.mouseDownY - mouseGlobals.mouseUpY) / 2;
        ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
        ctx.closePath();
        ctx.stroke();
        ctx.fill();
    }
    static getTool(shape) {
        if (!ShapeTool.shapeTool) {
            ShapeTool.shapeTool = new ShapeTool(shape);
        }
        ShapeTool.shapeTool.shape = shape;
        return ShapeTool.shapeTool;
    }
}
ShapeTool.shapeTool = null;
