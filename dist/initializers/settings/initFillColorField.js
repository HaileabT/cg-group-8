var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Color } from "../../canvas/helpers/Color.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";
export const initFillColorField = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Something");
    try {
        const fillColorField = yield elementSelector(".fill-color");
        if (!fillColorField)
            throw new Error("Element not found.");
        const indicator = yield elementSelector(".fill-color-indicator");
        if (!indicator)
            throw new Error("Element not found.");
        indicator.style.backgroundColor = fillColorField.value;
        const colorObject = Color.colorFromHex(fillColorField.value);
        userGlobals.fillColor = colorObject;
        fillColorField.addEventListener("change", (e) => __awaiter(void 0, void 0, void 0, function* () {
            indicator.style.backgroundColor = fillColorField.value;
            const colorObject = Color.colorFromHex(fillColorField.value);
            userGlobals.fillColor = colorObject;
        }));
    }
    catch (err) {
        console.error(err);
    }
});
