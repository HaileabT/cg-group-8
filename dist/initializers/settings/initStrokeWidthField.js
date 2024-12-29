var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { appDefaults } from "../../global/defaults.global.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";
export const initStrokeWidthField = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Something");
    try {
        const strokeWidthField = yield elementSelector(".stroke-width");
        if (!strokeWidthField)
            throw new Error("Element not found.");
        const storkeWidthFactor = parseInt(strokeWidthField.value) / 100;
        const newStrokeWidth = appDefaults.DEFAULT_STROKE_WIDTH * storkeWidthFactor;
        userGlobals.strokeWidth = newStrokeWidth;
        console.log(newStrokeWidth, storkeWidthFactor);
        strokeWidthField.addEventListener("change", (e) => {
            var _a;
            console.log(strokeWidthField.value);
            if (isNaN(parseInt((_a = strokeWidthField.value) !== null && _a !== void 0 ? _a : "")))
                return;
            const storkeWidthFactor = parseInt(strokeWidthField.value) / 100;
            const newStrokeWidth = appDefaults.DEFAULT_STROKE_WIDTH * storkeWidthFactor;
            userGlobals.strokeWidth = newStrokeWidth;
            console.log(newStrokeWidth, storkeWidthFactor);
        });
    }
    catch (err) {
        console.error(err);
    }
});
