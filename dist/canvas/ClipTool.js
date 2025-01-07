import { appGlobals } from "../global/app.global.js";
import { mouseGlobals } from "../global/mouse.global.js";
import { Color } from "./helpers/Color.js";
export class ClipTool {
    constructor() {
        this.toolType = "rect";
    }
    apply(ctx) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const maxX = Math.max(mouseGlobals.mouseDownX, mouseGlobals.mouseUpX);
        const maxY = Math.max(mouseGlobals.mouseDownY, mouseGlobals.mouseUpY);
        const minX = Math.min(mouseGlobals.mouseDownX, mouseGlobals.mouseUpX);
        const minY = Math.min(mouseGlobals.mouseDownY, mouseGlobals.mouseUpY);
        ctx.clearRect(0, 0, minX, (_b = (_a = appGlobals.canvas) === null || _a === void 0 ? void 0 : _a.height) !== null && _b !== void 0 ? _b : window.innerHeight);
        ctx.clearRect(0, maxY, (_d = (_c = appGlobals.canvas) === null || _c === void 0 ? void 0 : _c.width) !== null && _d !== void 0 ? _d : window.innerWidth, (_f = (_e = appGlobals.canvas) === null || _e === void 0 ? void 0 : _e.height) !== null && _f !== void 0 ? _f : window.innerHeight - maxY);
        ctx.clearRect(maxX, 0, (_h = (_g = appGlobals.canvas) === null || _g === void 0 ? void 0 : _g.width) !== null && _h !== void 0 ? _h : window.innerWidth - maxX, (_k = (_j = appGlobals.canvas) === null || _j === void 0 ? void 0 : _j.height) !== null && _k !== void 0 ? _k : window.innerHeight);
        ctx.clearRect(0, 0, (_m = (_l = appGlobals.canvas) === null || _l === void 0 ? void 0 : _l.width) !== null && _m !== void 0 ? _m : window.innerWidth, minY);
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
        if (!ClipTool.clipTool) {
            ClipTool.clipTool = new ClipTool();
        }
        return ClipTool.clipTool;
    }
}
ClipTool.clipTool = null;
