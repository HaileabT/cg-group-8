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
    hideIndicator() {
        if (!this.divElement)
            return;
        this.divElement.style.display = "none";
    }
    showIndicator() {
        if (!this.divElement)
            return;
        this.divElement.style.display = "block";
    }
    moveIndicatorTo(x, y) {
        if (!this.divElement)
            return;
        this.divElement.style.left = `${x}px`;
        this.divElement.style.top = `${y}px`;
    }
    resizeIndicator(w, h) {
        if (!this.divElement)
            return;
        this.divElement.style.width = `${w}px`;
        this.divElement.style.height = `${h}px`;
    }
}
RectToolIndicator.indicator = null;
