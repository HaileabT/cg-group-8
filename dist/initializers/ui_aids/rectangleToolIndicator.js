var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { elementSelector } from "../../utils/elementSelector.js";
export class RectToolIndicator {
    constructor(el) {
        this.divElement = null;
        this.anchorX = undefined;
        this.anchorY = undefined;
        this.deltaX = 0;
        this.deltaY = 0;
        this.divElement = el;
    }
    static getIndicator() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!RectToolIndicator.indicator) {
                const indEl = yield elementSelector("#rect-indicator");
                if (!indEl) {
                    throw new Error("Rectangle indicator not found.");
                }
                RectToolIndicator.indicator = new RectToolIndicator(indEl);
            }
            return RectToolIndicator.indicator;
        });
    }
    resetAnchor() {
        this.anchorX = undefined;
        this.anchorY = undefined;
    }
    hideIndicator() {
        if (!this.divElement)
            return;
        this.resetAnchor();
        this.divElement.style.display = "none";
    }
    showIndicator(x, y) {
        if (!this.divElement)
            return;
        this.anchorX = this.anchorX ? this.anchorX : x;
        this.anchorY = this.anchorY ? this.anchorY : y;
        console.log("Anchor Points: ", this.anchorX, this.anchorY, x, y);
        this.divElement.style.display = "block";
    }
    moveIndicatorTo(x, y) {
        if (!this.divElement)
            return;
        this.divElement.style.left = `${x}px`;
        this.divElement.style.top = `${y}px`;
    }
    resizeIndicator(x, y, deltaX, deltaY, ctx) {
        var _a, _b, _c, _d;
        if (!this.divElement)
            return;
        const currentX = parseFloat(getComputedStyle(this.divElement).left.slice(0, -2));
        const currentY = parseFloat(getComputedStyle(this.divElement).top.slice(0, -2));
        const newX = Math.min(currentX, x);
        const newY = Math.min(currentY, y);
        console.log("This deltas: ", this.deltaX, this.deltaY);
        console.log("New deltas: ", deltaX, deltaY);
        const xDeltaAreOpposite = this.deltaX * deltaX < 0;
        const yDeltaAreOpposite = this.deltaY * deltaY < 0;
        this.anchorX = xDeltaAreOpposite && x < ((_a = this.anchorX) !== null && _a !== void 0 ? _a : x) ? x : this.anchorX;
        this.anchorY = yDeltaAreOpposite && y < ((_b = this.anchorY) !== null && _b !== void 0 ? _b : y) ? y : this.anchorY;
        this.divElement.style.left = `${newX}px`;
        this.divElement.style.top = `${newY}px`;
        this.divElement.style.width = `${Math.abs(((_c = this.anchorX) !== null && _c !== void 0 ? _c : x) - x)}px`;
        this.divElement.style.height = `${Math.abs(((_d = this.anchorY) !== null && _d !== void 0 ? _d : y) - y)}px`;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
    }
    isIndicatorVisible() {
        if (!this.divElement)
            return;
        return this.divElement.style.display !== "none";
    }
}
RectToolIndicator.indicator = null;
