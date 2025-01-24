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
export const initStrokeColorField = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Something");
    try {
        const strokeColorField = yield elementSelector(".stroke-color");
        if (!strokeColorField)
            throw new Error("Element not found.");
        const indicator = yield elementSelector(".color-indicator");
        if (!indicator)
            throw new Error("Element not found.");
        indicator.style.backgroundColor = strokeColorField.value;
        const colorObject = Color.colorFromHex(strokeColorField.value);
        userGlobals.strokeColor = colorObject;
        strokeColorField.addEventListener("change", (e) => __awaiter(void 0, void 0, void 0, function* () {
            indicator.style.backgroundColor = strokeColorField.value;
            const colorObject = Color.colorFromHex(strokeColorField.value);
            userGlobals.strokeColor = colorObject;
        }));
    }
    catch (err) {
        console.error(err);
    }
});
