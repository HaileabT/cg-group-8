var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ShapeTool } from "../../canvas/ShapeTool.js";
import { appGlobals } from "../../global/app.global.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";
export const initShapesButton = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Something");
    try {
        const shapesButton = yield elementSelector("#shapes");
        if (!shapesButton)
            throw new Error("Element not found.");
        shapesButton.addEventListener("input", (e) => {
            console.log(shapesButton.value);
            if (!appGlobals.appShapes.includes(shapesButton.value))
                return;
            userGlobals.currentTool = ShapeTool.getTool(shapesButton.value);
        });
    }
    catch (err) {
        console.error(err);
    }
});
