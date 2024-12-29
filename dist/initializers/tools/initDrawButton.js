var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DrawTool } from "../../canvas/DrawTool.js";
import { userGlobals } from "../../global/user.global.js";
import { elementSelector } from "../../utils/elementSelector.js";
export const initDrawButton = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Something");
    try {
        const drawButton = yield elementSelector("#draw");
        if (!drawButton)
            throw new Error("Element not found.");
        drawButton.addEventListener("click", (e) => {
            userGlobals.currentTool = DrawTool.getTool();
        });
    }
    catch (err) {
        console.error(err);
    }
});
